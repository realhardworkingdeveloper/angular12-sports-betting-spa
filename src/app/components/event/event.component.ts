import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event, Quota } from 'src/app/Event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  targetQuota!: number;
  @Input() event!: any;
  @Input() filterMarketId!: number;
  @Output() onAddToTicket: EventEmitter<Quota> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onQuotaClick($event: any, {event, pick}: Quota): void {
    this.onAddToTicket.emit({event, pick});
    this.toggleSelectedQuota($event);
  }

  toggleSelectedQuota($event: any) {
    const clickedQuota = parseFloat($event.target.innerText);

    if (this.targetQuota != clickedQuota) {
      this.targetQuota = clickedQuota;
    } else {
      this.targetQuota = -1;
    }
  }
}
