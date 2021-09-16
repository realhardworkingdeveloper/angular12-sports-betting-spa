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
    this.ticketService.getTicketList().subscribe((list: Quota[]) => this.ticketList = list);
    this.ticketService.getTotalQuota().subscribe(tq => this.totalQuota = tq );
  }

  removeFromTicket(event: Event): void {
    this.ticketService.removeFromTicket(event)
      .subscribe(() => this.ticketList = this.ticketList.filter(e => e.event.id !== event.id));
  }

  calculateQuota(): void {
    this.calculateWin();
  }

  calculateWin(): void {
    this.potentialWin = this.totalQuota * this.placedBet;
  }
}
