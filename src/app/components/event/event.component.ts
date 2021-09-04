import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event: any;
  @Input() eventsByDay: any;
  @Output() onAddToTicket: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onQuotaClick({event, pick}: any) {
    this.onAddToTicket.emit({event, pick});
  }
}
