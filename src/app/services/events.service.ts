import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiUrl = 'https://sportdataprovider.stage-volcano.com/api/public/prematch/SportEvents?SportId=1&LocationId=243&timezone=-120&clientType=MobileWebConsumer&lang=en';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
