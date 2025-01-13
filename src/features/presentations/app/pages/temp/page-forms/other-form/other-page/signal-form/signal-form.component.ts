import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-form',
  imports: [],
  templateUrl: './signal-form.component.html',
  styleUrl: './signal-form.component.scss'
})
export class SignalFormComponent {
   counterNumber = signal<number>(0);
   userSignal = signal<{firstName : string,lastName : string,age : number}>({firstName:"Saeed",lastName:"Shayesteh",age:30});



   incrementCounter(){

    if(this.counterNumber() == 20)
    {

      this.counterNumber.set(0);
      this.userSignal.set({firstName:"Saeed",lastName:"Shayesteh",age:30});


    }
    else
     {
      this.counterNumber.update((oldNum)=> oldNum + 1 );
      this.userSignal.update( (value:{firstName : string,lastName : string,age : number}) => ({firstName:value.firstName,lastName:value.firstName,age:value.age + 1})  );
     }
   }

   decrementCounter(){
    if(this.counterNumber().valueOf()>1)
     this.counterNumber.update((oldNum)=> oldNum - 1 );
   }


}
