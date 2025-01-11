import { AString } from "../../extensions/extensions";

export interface IPermissions {
  id: number;
  title: string;
  faTitle: string;
  isActive: boolean;
  isSuccess: boolean;
  message1: string;
}

export class Permissions implements IPermissions{
  id: number;
  title: string;
  faTitle: string;
  isActive: boolean;
  isSuccess: boolean;
  message1: string;
  message2?: string;
  constructor(){
    this.id=0;
    this.title = "";
    this.faTitle= "";
    this.isActive=false;
    this.isSuccess=false;
    this.message1= "";
  }
}
