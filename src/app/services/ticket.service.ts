import { Injectable } from '@angular/core';
import { Event, Quota, Pick } from '../Event';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private _ticketList = new BehaviorSubject<Quota[]>([]);
  readonly ticketListChange$ = this._ticketList.asObservable();
  private _totalQuota = new BehaviorSubject<number>(0);
  readonly totalQuotaCalc$ = this._totalQuota.asObservable();

  private ticketList: Quota[] = [];
  private totalQuota: number = 0;

  constructor() { }

  getTotalQuota() {
    let totalQuota = 0;

    this.ticketList !== [] && this.ticketList.map((event: any) => {
      totalQuota !== 0 ? totalQuota *= event.pick.odds : totalQuota += event.pick.odds;
      this.totalQuota = totalQuota;
    });
  }

  addToTicket({event, pick}: Quota) {
    this.ticketList.push({event, pick});
    this._ticketList.next(this.ticketList);
    this.getTotalQuota();
    this._totalQuota.next(this.totalQuota);
  }

  removeFromTicket(event: Event) {
    this.ticketList = this.ticketList.filter(
      (ticketItem: Quota) => ticketItem.event.id !== event.id
    );
    this._ticketList.next(this.ticketList);
    this.getTotalQuota();
    this._totalQuota.next(this.totalQuota);
  }

  isEventOnTicket(event: Event): boolean {
    return this.ticketList.some((e: Quota) => e.event.id === event.id);
  }

  isQuotaOnTicket(pick: Pick): boolean {
    return this.ticketList.some((q: Quota) => q.pick.id === pick.id);
  }
}
