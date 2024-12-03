import { Route } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {UserProfileComponent} from "./pages/user-profile/user-profile.component";

export const appRoutes: Route[] = [{ path: 'login', component: LoginComponent }, { path: 'user', component: UserProfileComponent }];
