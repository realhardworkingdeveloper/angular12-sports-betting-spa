import { Component, OnInit } from '@angular/core';
import { Event, Quota } from 'src/app/Event';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  ticketList!: Quota[];
  totalQuota: number = 0;
  placedBet: number = 1;
  potentialWin: number = 0;

  constructor(public ticketService: TicketService) {
  }

  ngOnInit(): void {
    this.ticketService.ticketListChange$.subscribe((list: Quota[]) => this.ticketList = list);
    this.ticketService.totalQuotaCalc$.subscribe(tq => {
      this.totalQuota = tq
      this.calculateWin();
    });
  }

  removeFromTicket(event: Event): void {
    this.ticketService.removeFromTicket(event);
  }

  calculateWin(): void {
    this.potentialWin = this.totalQuota * this.placedBet;
  }
}
