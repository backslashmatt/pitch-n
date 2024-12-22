import { Component } from '@angular/core';
import { tuiDialog } from '@taiga-ui/core';
import { CreateEventDialogComponent } from '../../components/create-event-dialog/create-event-dialog.component';
import { EventFormComponent } from '../../components/event-form/event-form.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    EventFormComponent
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  private readonly dialog = tuiDialog(CreateEventDialogComponent, {
    dismissible: true,
    label: 'Create new event',
  })

}
