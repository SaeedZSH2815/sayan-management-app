

export interface IAuthenticateModel
{
  username : string;
  password : string;
}

export class AuthenticateModel implements IAuthenticateModel {

  username: string = "";
  password: string = "";

  constructor(data? : IAuthenticateModel){
    if (data){
      for(var property in data){
        if(data.hasOwnProperty(property)){
          (<any>this)[property] = (<any>data)[property]
        }
      }
    }
  }

}
