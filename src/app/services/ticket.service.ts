import { Injectable } from '@angular/core';
import { Event, Quota } from '../Event';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  ticketList: Quota[] = [];

  constructor() { }

  addToTicket({event, pick}: Quota) {
    this.ticketList.push({event, pick});
  }

  removeFromTicket(event: Event) {
    this.ticketList = this.ticketList.filter(
      (ticketItem: Quota) => ticketItem.event.id !== event.id
    );
  }
}
