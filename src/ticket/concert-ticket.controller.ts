import { Controller, Get, Query } from '@nestjs/common';
import { ConcertTicketService } from './concert-ticket.service';
import { Ticket } from './interface/ticket.interface';

@Controller('tickets')
export class ConcertTicketController {
  constructor(private readonly ticketService: ConcertTicketService) {}

  @Get()
  async getConcertTickets(
    @Query('eventId') eventId: string,
  ): Promise<Ticket[]> {
    return this.ticketService.fetchTickets(eventId);
  }
}
