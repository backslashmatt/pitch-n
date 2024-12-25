import { Component, inject } from '@angular/core';
import { TuiAppearance, TuiButton, TuiIcon, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge, TuiCardMedium, TuiHeader } from '@taiga-ui/layout';
import { Router, RouterLink } from '@angular/router';
import { EventsStore } from '../../stores/events.store';
import { DatePipe } from '@angular/common';
import { MonthPipe } from '../../pipes/month.pipe';

@Component({
  selector: 'app-events-summary',
  standalone: true,
  imports: [
    TuiAppearance,
    TuiCardLarge,
    TuiTitle,
    TuiHeader,
    TuiButton,
    TuiIcon,
    RouterLink,
    TuiCardMedium,
    DatePipe,
    MonthPipe
  ],
  templateUrl: './events-summary.component.html',
  styleUrl: './events-summary.component.css'
})
export class EventsSummaryComponent {
  router = inject(Router);
  eventStore = inject(EventsStore);

  createNewEvent() {
    console.log('Create new event');
  }

  calcDays(start: Date, end: Date) {
    return Math.floor((end.getTime() - start.getTime()) / (1000 * 3600 * 24));
  }
}
