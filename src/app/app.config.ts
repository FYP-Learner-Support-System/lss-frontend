import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { routes1 } from './teacher-dashboard/teacher-dashboard-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { FormsModule, NgModel } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideRouter(routes1), provideAnimations(), provideStore(reducers, { metaReducers }),provideHttpClient(),MessageService]
};
