import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { AbpHttpInterceptor } from 'abp-ng2-module';
import { UserRepository } from '../../../data-infru/repositories/user-repository';
import { IUserRepository } from '../../../domain/repositories/iuser-repository';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AccountService } from '../../../../core/services/account-service/account.service';
import { LogService } from '../../../../core/services/log-service/log.service';
import { appMainroutes } from './main-routes';
import { AuthGuard } from './guard-services/auth.guard';
import { AuthService } from '../../../../core/services/auth.service';
import { CanDeactiveUserInfoGuard } from '../pages/temp/users/user-info/can-deactive-user-detail.guard';
import { UserDetailResolve } from '../pages/temp/users/user-detail/user-detail-resolve';
import { UserService } from '../../../../core/services/user.service';
import { AppUtility } from '../../../../utils/utility';



export const appConfig: ApplicationConfig = {

  providers: [

    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appMainroutes,withHashLocation()),
    provideHttpClient(),
    /* Custom Provider */
    { provide: HTTP_INTERCEPTORS, useClass: AbpHttpInterceptor, multi: true },
    { provide: IUserRepository, useClass: UserRepository },
    provideAnimationsAsync(),

    AccountService,
    LogService,
    AuthService,
    AuthGuard,
    UserService,
    CanDeactiveUserInfoGuard,
    UserDetailResolve,
    AppUtility,

   // { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }




  ]
};
