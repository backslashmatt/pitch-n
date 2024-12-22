import { Component } from '@angular/core';
import { TuiAppearance, TuiButton, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [
    TuiAppearance,
    TuiCardLarge,
    TuiHeader,
    TuiTitle,
    TuiButton
  ],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {

}
