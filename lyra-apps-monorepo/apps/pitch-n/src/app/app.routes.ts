import { Route } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { NewEventComponent } from './pages/new-event/new-event.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EventsComponent } from './pages/events/events.component';

export const appRoutes: Route[] = [
  {
    path: 'new-event',
    component: NewEventComponent
  }, {
    path: 'user',
    component: UserProfileComponent
  }, {
    path: 'home',
    component: DashboardComponent
  }, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'events',
    component: EventsComponent
  }];
