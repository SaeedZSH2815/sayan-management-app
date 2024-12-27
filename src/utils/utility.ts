import { Observable } from "rxjs";

//#region

export declare const String: StringExtensions;

interface StringExtensions extends StringConstructor {
    empty : '';
}

String.empty = '';

//#endregion
export function sum(clv : string): string {
  return clv + "   ";
}


export class App{


  constructor() { }

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



  
  
  }


  export enum ADirect{
    Right = 1,
    Center = 2,
    Left = 3

  }

export class AppUtility {

  
  constructor(){}
 
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

}
 

