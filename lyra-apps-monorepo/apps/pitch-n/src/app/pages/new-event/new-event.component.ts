import { Component } from '@angular/core';
import { TuiAppearance, TuiButton, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-new-event',
  standalone: true,
  imports: [
    TuiAppearance,
    TuiCardLarge,
    TuiHeader,
    TuiTitle,
    TuiButton
  ],
  templateUrl: './new-event.component.html',
  styleUrl: './new-event.component.css'
})
export class NewEventComponent {
  expanded = false;
}
