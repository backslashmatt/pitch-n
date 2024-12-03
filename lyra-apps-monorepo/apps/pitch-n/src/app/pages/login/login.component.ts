import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from "../../components/auth/auth.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, AuthComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
