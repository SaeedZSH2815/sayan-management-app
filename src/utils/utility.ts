import { Observable } from "rxjs";

//#region

export declare const String: StringExtensions;

interface StringExtensions extends StringConstructor {
    empty : '';
}

String.empty = '';

//#endregion

export class App{

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
