import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from '../auth/auth.component';
import { TuiAppBar } from '@taiga-ui/layout';
import { TuiAppearance, TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, AuthComponent, TuiAppBar, TuiButton, TuiAppearance],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
