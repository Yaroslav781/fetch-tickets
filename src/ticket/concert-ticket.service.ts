import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { Ticket } from './interface/ticket.interface';

@Injectable()
export class ConcertTicketService {
  async fetchTickets(eventId: string): Promise<Ticket[]> {
    const url = `https://my.laphil.com/en/syos2/package/${eventId}`;
    const response = await axios.get(url);
    const tickets: Ticket[] = [];

    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      $('.ticket').each((index, element) => {
        const section = $(element).find('.section').text();
        const row = $(element).find('.row').text();
        const seatNumber = $(element).find('.seat-number').text();
        const priceString = $(element).find('.price').text();
        const price = parseFloat(priceString.replace('$', ''));

        const ticket: Ticket = {
          section,
          row,
          seatNumber,
          price,
        };
        tickets.push(ticket);
      });
    }
    return tickets;
  }
}
