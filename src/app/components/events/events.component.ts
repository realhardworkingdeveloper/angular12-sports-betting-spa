import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: any = [];

  constructor(
    private eventsService: EventsService, 
    private ticketService: TicketService
  ) { }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(events => this.events = events);
  }

  toggleAddToTicket({event, pick}: any) {
    const isEventOnTicket = this.ticketService.ticketList.some(
        (e: any) => e.event.id === event.id
      );
    const isQuotaOnTicket = this.ticketService.ticketList.some(
        (q: any) => q.pick.id === pick.id
      );

    if (isEventOnTicket) {
      if(isQuotaOnTicket) {
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
