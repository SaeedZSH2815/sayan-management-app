
import { AuthenticateModel } from "../../data-infru/models/authenticate-model";
import { AuthenticateEntity } from "../entities/authenticate-entity";
import { IUserRepository } from "../repositories/iuser-repository";
import { Injectable } from "@angular/core";
import { DataState } from "../../../core/data-state";
import { UseCase } from "../../../core/use-case";
import * as RxJS from "../../../core/rxjs-operators";

@Injectable()
export class UserLoginUseCase implements UseCase<AuthenticateModel, DataState<AuthenticateEntity>> {

  constructor(private _IUserRepository: IUserRepository) {

  }

  exceute(clParam: AuthenticateModel): RxJS.Observable<DataState<AuthenticateEntity>> {
    return this._IUserRepository.Authenticate(clParam);
  }

}
