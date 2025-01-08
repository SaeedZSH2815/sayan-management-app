export interface IAuthenticateEntity {
  isSuccess : boolean;
  token     : string;
  expireTime: string;
  userName  : string;
  message?   : string;
  userInfo  : number;
}

export class AuthenticateEntity implements IAuthenticateEntity{
  isSuccess : boolean = false;
  token     : string = "";
  expireTime: string = "";
  userName  : string = "";
  message   : string | undefined;
  userInfo  : number = 0;


  constructor(data?: IAuthenticateEntity) {
    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }
  }


  init(_data?: any) {
    if (_data) {
        this.isSuccess = _data["isSuccess"];
        this.message = _data["message"];
        this.id = _data["id"];
        this.fullName = _data["fullName"];
        this.expireTime = _data["expireTime"];
        this.roleName = _data["roleName"];
    }
}

  static fromJS(data: any): AuthenticateEntity {

    data = typeof data === 'object' ? data : {};
    let result = new AuthenticateEntity();
    result.init(data);
    return result;
}
}
