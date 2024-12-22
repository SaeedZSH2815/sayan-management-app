import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './main-routes';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { AbpHttpInterceptor } from 'abp-ng2-module';
import { UserRepository } from '../../../data-infru/repositories/user-repository';
import { IUserRepository } from '../../../domain/repositories/iuser-repository';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UnlessDirective } from '../../../../core/directives/unless/unless.directive';

export const appConfig: ApplicationConfig = {
  
  providers: [

    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideHttpClient(),
    /* Custom Provider */
    { provide: HTTP_INTERCEPTORS, useClass: AbpHttpInterceptor, multi: true },
    { provide: IUserRepository, useClass: UserRepository },
    provideAnimationsAsync(),
    provideAnimationsAsync(),
 
    

  ]
};
