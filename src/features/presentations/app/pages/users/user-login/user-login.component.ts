import { Component } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { UserRepository } from '../../../../../data-infru/repositories/user-repository';
import { IUserRepository } from '../../../../../domain/repositories/iuser-repository';
import { AbpHttpInterceptor } from 'abp-ng2-module';
import { UserLoginUseCase } from '../../../../../domain/use-cases/user-login-use-case';
import { AuthenticateModel } from '../../../../../data-infru/models/authenticate-model';
import { FirstComponent } from '../../temp/first/first.component';

export const getUserLoginUseCaseFactory = (userRepository: IUserRepository) => new UserLoginUseCase(userRepository);

export const getUserLoginUseCaseProvider = {
  provide: UserLoginUseCase,
  useFactory: getUserLoginUseCaseFactory,
  deps: [IUserRepository]
}
@Component({
  selector: 'app-user-login',
  imports: [FirstComponent],
  providers: [
     getUserLoginUseCaseProvider,  
  ],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {

  constructor(/*public userloginUseCase: UserLoginUseCase*/) {
    let auth = new AuthenticateModel({ userNameOrEmailAddress: "admin", password: "123qwe", rememberClient: false });
 //   this.userloginUseCase.exceute(auth).subscribe((res) => console.log(res));
  }

}
