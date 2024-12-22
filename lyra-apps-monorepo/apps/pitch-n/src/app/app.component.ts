import {
  TuiButton,
  TuiDataListComponent,
  TuiDropdownDirective,
  TuiDropdownHover, TuiDropdownOpen,
  TuiIcon,
  TuiRoot
} from '@taiga-ui/core';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {
  TuiAsideComponent,
  TuiAsideGroupComponent,
  TuiAsideItemDirective,
  TuiHeaderComponent,
  TuiLogoComponent
} from '@taiga-ui/layout';
import {
  TuiAvatar,
  TuiBadge,
  TuiBadgeNotification, TuiChevron,
  TuiDataListDropdownManager,
  TuiFade,
  TuiTabsHorizontal
} from '@taiga-ui/kit';
import { AuthComponent } from './components/auth/auth.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, TuiRoot, NavbarComponent, TuiAsideItemDirective, TuiIcon, TuiBadge, TuiTabsHorizontal, TuiDropdownDirective, TuiDataListComponent, TuiAsideGroupComponent, TuiBadgeNotification, TuiAvatar, AuthComponent, TuiAsideComponent, TuiButton, TuiLogoComponent, TuiHeaderComponent, TuiFade, TuiDropdownHover, TuiDropdownOpen, TuiDataListDropdownManager, TuiChevron],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pitch-n';
  expanded = false;
}
