import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event, Quota } from 'src/app/Event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event!: any;
  @Input() filterMarketId!: number;
  @Output() onAddToTicket: EventEmitter<Quota> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onQuotaClick({event, pick}: Quota) {
    this.onAddToTicket.emit({event, pick});
    console.log(this.event);
  }
}
