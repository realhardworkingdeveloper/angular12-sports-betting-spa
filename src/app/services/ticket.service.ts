import { Injectable } from '@angular/core';
import { Event, Quota } from '../Event';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  ticketList: Quota[] = [];

  constructor() { }

  getTicketList(): Observable<Quota[]> {
    return of(this.ticketList);
  }

  getTotalQuota(): number {
    let totalQuota = 0;

    this.ticketList !== [] && this.ticketList.map((event: any) => {
      totalQuota !== 0 ? totalQuota *= event.pick.odds : totalQuota += event.pick.odds;
    });

    return totalQuota;
  }

  addToTicket({event, pick}: Quota): void {
    this.ticketList.push({event, pick});
  }

  removeFromTicket(event: Event): void {
    this.ticketList = this.ticketList.filter(
      (ticketItem: Quota) => ticketItem.event.id !== event.id
    );
  }
}
