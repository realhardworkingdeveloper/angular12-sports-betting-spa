import { Component, OnInit } from '@angular/core';
import { Quota } from 'src/app/Event';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  ticketList: Quota[];
  totalQuota: number = 0;

  constructor(public ticketService: TicketService) { 
    this.ticketList = ticketService.getTicketList();
    this.totalQuota = ticketService.calculateTotalQuota();
  }

  ngOnInit(): void {
  }
}
