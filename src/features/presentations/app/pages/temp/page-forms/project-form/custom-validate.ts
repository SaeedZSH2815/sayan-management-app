import { Injectable } from "@angular/core";
import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";
import { map, Observable, of, tap } from "rxjs";
import { UserService } from "../../../../../../../core/services/user.service";

@Injectable()
export class CustomValidator {

    
    static invalidProjectName(clControl: AbstractControl): { [s: string]: boolean } |null{
        if ((clControl.value)&&((clControl.value as string).toUpperCase() === "TEST"))
            return { "invalidProjectName": true };
        else
          return null;

    }

    static asyncInvalidProjectName(clControl : AbstractControl):Observable<ValidationErrors | null>{
       console.log(clControl.value);
    
       return new Observable((sub)=>{
        console.log("ddddd");
        sub.next(null);
        sub.complete;

       }).pipe( map((v)=>null),tap((r)=>console.log(r)) );
       
       //return of({ "invalidProjectName": true }).pipe( map((v)=>null) );
        
    }
         

}