import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsComponent } from './components/events/events.component';
import { EventComponent } from './components/event/event.component';
import { FilterPipe } from './pipes/filter.pipe';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketService } from './services/ticket.service';
import { EventsService } from './services/events.service';
import { FormsModule } from '@angular/forms';
import { PickOrderPipe } from './pipes/pick-order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventComponent,
    FilterPipe,
    TicketComponent,
    PickOrderPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TicketService,
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
