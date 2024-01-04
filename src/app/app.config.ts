import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { routes1 } from './teacher-dashboard/teacher-dashboard-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideRouter(routes1), provideAnimations()]
};
