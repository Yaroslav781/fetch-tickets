import { Module } from '@nestjs/common';
import { ConcertTicketController } from './concert-ticket.controller';
import { ConcertTicketService } from './concert-ticket.service';

@Module({
  controllers: [ConcertTicketController],
  providers: [ConcertTicketService],
})
export class ConcertTicketModule {}
