import { dateTimestampProvider } from "rxjs/internal/scheduler/dateTimestampProvider";

export interface IUserInfo{
  isSuccess:	boolean;
  message?:	string;
  id	:number;
  userName?	:string
  fullName?:	string
  sex:	boolean
  rules?	:string
  expireTime:	string;
  drFullName?	:string;
  drId:	number
  drNationalCode?:	string;
  hostName?	:string;
  token?:	string
}



export interface IAuthenticateEntity {
  isSuccess : boolean;
  token     : string;
  expireTime: string;
  userName  : string;
  message?   : string;
  userInfo?  : IUserInfo;
}

export class AuthenticateEntity implements IAuthenticateEntity{
  isSuccess : boolean = false;
  token     : string = "";
  expireTime: string = "";
  userName  : string = "";
  message   : string | undefined;
  userInfo?  : IUserInfo;


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
        this.token = _data["token"];
        this.expireTime = _data["expireTime"];
        this.userName = _data["userName"];
        this.message = _data["message"];
        this.message = _data["message"];

        this.userInfo = {
          drId:_data["userInfo"]["drId"],
          expireTime:_data["userInfo"]["expireTime"],
          id:_data["userInfo"]["id"],
          isSuccess:_data["userInfo"]["isSuccess"],
          sex:_data["userInfo"]["sex"],
          drFullName:_data["userInfo"]["drFullName"],
          drNationalCode:_data["userInfo"]["drNationalCode"],
          fullName:_data["userInfo"]["fullName"],
          hostName:_data["userInfo"]["hostName"],
          message:_data["userInfo"]["message"],
          rules:_data["userInfo"]["rules"],
          token:_data["userInfo"]["token"],
          userName:_data["userInfo"]["userName"],

        };

    }
}

  static fromJS(data: any): AuthenticateEntity {

    data = typeof data === 'object' ? data : {};
    let result = new AuthenticateEntity();
    result.init(data);
    return result;
}
}
