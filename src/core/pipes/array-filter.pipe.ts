import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter',pure:false
})
export class ArrayFilterPipe implements PipeTransform {

  transform(value:any,filterValue:string,fieldName:string) : any {
    if((value)&&(filterValue.length>0)&&(Array.isArray(value))){
      
      //console.log(value);
      return  (value as []).filter((v)=>(<string>v[fieldName]).includes(filterValue)) as Array<any>;
    }
    else
    return value;        
  }

}
