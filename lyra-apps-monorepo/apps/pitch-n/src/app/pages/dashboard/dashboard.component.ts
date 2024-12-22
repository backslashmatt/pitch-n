import { Component } from '@angular/core';
import { EventsSummaryComponent } from '../../components/events-summary/events-summary.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    EventsSummaryComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
