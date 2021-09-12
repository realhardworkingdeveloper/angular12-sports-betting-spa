import { Injectable } from '@angular/core';
import { Event, Quota } from '../Event';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  ticketList: Quota[] = [];
  totalQuota: number = 0;

  constructor() { }

  getTicketList(): Quota[] {
    return this.ticketList;
  }

  getTotalQuota(): number {
    return this.totalQuota;
  }

  addToTicket({event, pick}: Quota) {
    this.ticketList.push({event, pick});
    console.log(this.ticketList);
  }

  removeFromTicket(event: Event) {
    this.ticketList = this.ticketList.filter(
      (ticketItem: Quota) => ticketItem.event.id !== event.id
    );
  }

  calculateTotalQuota(): void {
    this.totalQuota = 0;

    this.ticketList !== [] && this.ticketList.map((event: any) => {
      this.totalQuota !== 0 ? this.totalQuota *= event.pick.odds : this.totalQuota += event.pick.odds
      console.log(event);
    });
    console.log(this.totalQuota);
  }
}
