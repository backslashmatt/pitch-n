import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAvatar } from '@taiga-ui/kit';
import { AuthService } from '@auth0/auth0-angular';
import {
  TuiButton,
  TuiDataListComponent,
  TuiDropdownDirective,
  TuiDropdownOpen,
  TuiLoader,
  TuiOption,
} from '@taiga-ui/core';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    TuiAvatar,
    TuiButton,
    TuiLoader,
    TuiDataListComponent,
    TuiOption,
    TuiDropdownDirective,
    TuiDropdownOpen,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  public readonly authService = inject(AuthService);
  menuOpen = false;
}
