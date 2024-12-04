
import { AuthenticateModel } from "../../data-infru/models/authenticate-model";
import { AuthenticateEntity } from "../entities/authenticate-entity";
import { DataState } from "../../../core/data-state";
import * as RxJS from "../../../core/rxjs-operators";
export abstract class IUserRepository {
  abstract Authenticate(clAuth: AuthenticateModel): RxJS.Observable<DataState<AuthenticateEntity>>;
}
