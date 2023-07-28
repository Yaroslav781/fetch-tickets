import { Controller, Get, Query } from '@nestjs/common';
import { ConcertTicketService } from './concert-ticket.service';

@Controller('tickets')
export class ConcertTicketController {
  constructor(private readonly ticketService: ConcertTicketService) {}

  @Get()
  async getConcertTickets(@Query('eventId') eventId: string): Promise<any[]> {
    return this.ticketService.fetchTickets(eventId);
  }
}
