import { Component, OnInit } from '@angular/core';
import { Quota } from 'src/app/Event';
import { Events } from 'src/app/Events';
import { EventsService } from 'src/app/services/events.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events!: Events;
  filterMarketId: number;

  constructor(
    private eventsService: EventsService,
    private ticketService: TicketService
  ) {
    this.filterMarketId = 1
  }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(events => this.events = events);
  }

  toggleAddToTicket({event, pick}: Quota): void {
    if (this.ticketService.isEventOnTicket(event)) {
      if(this.ticketService.isQuotaOnTicket(pick)) {
        this.ticketService.removeFromTicket(event);
      } else {
        this.ticketService.removeFromTicket(event);
        this.ticketService.addToTicket({event, pick});
      }
    } else {
      this.ticketService.addToTicket({event, pick});
    }
  }
}
