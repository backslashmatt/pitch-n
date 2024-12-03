import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAvatar } from '@taiga-ui/kit';
import { AuthService } from '@auth0/auth0-angular';
import { filter } from 'rxjs';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, TuiAvatar, TuiButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {
  public readonly authService = inject(AuthService);
  public isAuthenticated = signal(false);

  public ngOnInit() {
    this.authService.isAuthenticated$.pipe(filter(isAuthenticated => isAuthenticated)).subscribe(() => {
      this.isAuthenticated.set(true);
    });
  }
}
