import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event, Pick, Quota } from 'src/app/Event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  targetQuota: string = '';
  @Input() event!: any;
  @Input() filterMarketId!: number;
  @Output() onAddToTicket: EventEmitter<Quota> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onQuotaClick({event, pick}: Quota): void {
    this.onAddToTicket.emit({event, pick});
    this.toggleSelectedQuota(pick);
  }

  toggleSelectedQuota(pick: Pick): string {
    if (this.targetQuota === pick.id) {
      return this.targetQuota = '';
    }

    if (this.targetQuota != pick.id) {
      return this.targetQuota = pick.id;
    }

    return '';
  }
}
