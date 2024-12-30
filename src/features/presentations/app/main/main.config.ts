import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './main-routes';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { AbpHttpInterceptor } from 'abp-ng2-module';
import { UserRepository } from '../../../data-infru/repositories/user-repository';
import { IUserRepository } from '../../../domain/repositories/iuser-repository';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UnlessDirective } from '../../../../core/directives/unless/unless.directive';
import { AccountService } from '../../../../core/services/account-service/account.service';
import { LogService } from '../../../../core/services/log-service/log.service';
import { UserService } from '../../../../core/services/user.service';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './CustomRouteReuseStrategy';
export const appConfig: ApplicationConfig = {

  providers: [

    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideHttpClient(),
    /* Custom Provider */
    { provide: HTTP_INTERCEPTORS, useClass: AbpHttpInterceptor, multi: true },
    { provide: IUserRepository, useClass: UserRepository },
    provideAnimationsAsync(),
    
    AccountService,
    LogService,
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }




  ]
};
