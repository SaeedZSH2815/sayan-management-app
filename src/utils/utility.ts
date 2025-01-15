import { Observable } from "rxjs";

//#region

export declare const String: StringExtensions;

interface StringExtensions extends StringConstructor {
    empty : '';
}

String.empty = '';



  export enum ADirect{
    Right = 1,
    Center = 2,
    Left = 3

  }


  export class AppUtility {


  constructor(){

  }




  static varToStrDef(clAny: any, clDef: string): string {
      if (typeof clAny === "string")
        return clAny;
      else
        return clDef;

    }

  ASpace(clSpaceNo : number):string{
    let stringWithSpaces = ""  ;
    if (clSpaceNo<0){
       clSpaceNo = 0;
      }
      else{
       stringWithSpaces = "\xa0".repeat(clSpaceNo);
      }
      return stringWithSpaces;
  }


 ARoundStr(clStr : string,clLen : number):string{

  let DifLen = 0;
  if(clLen > clStr.length)
    DifLen = Math.abs(clLen - clStr.length);

  return  '' + clStr + this.ASpace(DifLen);
 }

 isStringObject(clObj : any):boolean{

  if( (clObj)&&(typeof clObj == "string") )
    return true;
  else
   return false;

}


static BlobToString(clValue : any) : Observable<string> {

  return new Observable( (observer)=>{
    if(!clValue){
      observer.next(String.empty);
      observer.complete();
    }
    else{
     let fileReader = new FileReader();

     fileReader.onload = (clEvent)=>{
      observer.next(fileReader.result as string);
      observer.complete();
      console.log(clEvent.target);
     }
     fileReader.onerror = ()=>{
      console.log("clEvent.target");
  }

     fileReader.readAsText(clValue);
    }
  } );

}


 static printObject(obj: any):void{


  const s = (typeof obj === 'object') ? obj:{};
  console.log(Reflect.setPrototypeOf(s, Object.prototype));

  const keys = Object.keys(obj)
  const values = keys.map(key => `${key}: ${Reflect.get(obj,key)}`)
  console.log("sdfds",values)
}

 static isObject(clObject : any):boolean{
  if(clObject == undefined)
    return false;
  else
   return (typeof clObject === 'object');
 }

 static getValuePropertyInObject(clObject : any,clPropertykey:PropertyKey):any{
 if(this.isObject(clObject))
  return Reflect.get(clObject, clPropertykey);
 else
  return undefined;
}

 static isPropertyInObject(clObject : any,propertykey:PropertyKey):boolean{
   /* Object.prototype.hasOwnProperty.call(action, "type") */
  if(this.isObject(clObject))
   return Object.hasOwn(clObject,propertykey);
  else
   return false;
 }


}


