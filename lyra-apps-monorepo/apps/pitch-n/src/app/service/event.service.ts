import { inject, Injectable } from '@angular/core';
import { API_URL } from '../../types';
import { HttpClient } from '@angular/common/http';
import { Event } from '../stores/events.store';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  public BASE_URL = API_URL + 'events';
  private readonly _http: HttpClient = inject(HttpClient);

  public getEventById(id: string) {
    return this._http.get<Event>(`${this.BASE_URL}/${id}`);
  }
}
