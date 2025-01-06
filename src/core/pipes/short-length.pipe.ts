import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortLength',
  pure:false
})
export class ShortLengthPipe implements PipeTransform {

  transform(value: string,clMaxLength :number): unknown {
    let res = value;
    if(value){
      if(value.length>clMaxLength)
        res = value.substring(0,clMaxLength)+"....";
    }
    return res;
  }

}
