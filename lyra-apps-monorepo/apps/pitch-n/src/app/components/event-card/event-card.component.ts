import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthPipe } from '../../pipes/month.pipe';
import { TuiCardMedium } from '@taiga-ui/layout';
import { TuiAppearance } from '@taiga-ui/core';
import { Event } from '../../stores/events.store';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule, MonthPipe, TuiCardMedium, TuiAppearance],
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
})
export class EventCardComponent {}
