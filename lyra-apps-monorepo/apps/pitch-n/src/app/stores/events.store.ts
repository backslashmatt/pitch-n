import { Injectable, signal } from '@angular/core';

export interface Event {
  name: string;
  startDate: Date;
  startTime: Date;
  endDate: Date;
  endTime: Date;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventsStore {
  public events = signal([{
    name: 'Event 1',
    startDate: new Date(),
    startTime: new Date(),
    endDate: (() => {
      const date = new Date();
      date.setDate(new Date().getDate() + 9);
      return date;
    })(),
    endTime: new Date(),
    location: 'Location 1',
  }]);

  addEvent(event: Event): void {
    this.events.set([...this.events(), ...[event]]);
  }

  getEvents(): Event[] {
    return this.events();
  }
}
