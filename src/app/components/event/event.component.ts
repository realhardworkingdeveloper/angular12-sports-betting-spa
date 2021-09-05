import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event, Quota } from 'src/app/Event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event!: Event;
  @Input() filterMarketId: number = 1;
  @Input() eventsByDay: any;
  @Output() onAddToTicket: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onQuotaClick({event, pick}: Quota) {
    this.onAddToTicket.emit({event, pick});
  }
}
