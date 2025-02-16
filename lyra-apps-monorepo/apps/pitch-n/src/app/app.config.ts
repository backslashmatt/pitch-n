import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAuth0({
      domain: 'lyraapps.us.auth0.com',
      clientId: '4RIS9YltKwIGmvGPSmZva90iQUctLUkx',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'https://services.pitch-n.com/',
      },
    }),
    NG_EVENT_PLUGINS,
  ],
};
