import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  ticketList: any = [];

  constructor() { }

  addToTicket({event, pick}: any) {
    this.ticketList.push({event, pick});
  }

  removeFromTicket(event: any) {
    this.ticketList = this.ticketList.filter(
      (e: any) => e.event.id !== event.id
    );
  }
}
