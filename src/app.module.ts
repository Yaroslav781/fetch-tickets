import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConcertTicketModule } from './ticket/concert-ticket.module';

@Module({
  imports: [ConcertTicketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
