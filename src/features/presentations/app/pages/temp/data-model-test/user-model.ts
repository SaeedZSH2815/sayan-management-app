export interface IUserModel
{
  userName : string;
  userCode : number;

  email      : string;
  cityName   : string;
  userCityName   : string;
  userStreetName : string;
}

export interface IUserAddress
{
  cityName   : string;
  streetName : string;
}
