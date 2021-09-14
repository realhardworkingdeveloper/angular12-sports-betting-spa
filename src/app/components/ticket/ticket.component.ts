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
  }

  removeFromTicket(event: Event): void {
    this.ticketService.removeFromTicket(event);
  }

  calculateQuota(): void {
    this.totalQuota = this.ticketService.getTotalQuota();
    this.calculateWin();
  }

  calculateWin(): void {
    this.potentialWin = this.totalQuota * this.placedBet;
  }
}
