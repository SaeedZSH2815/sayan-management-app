import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignalFormComponent } from '../../../pages/temp/page-forms/other-form/other-page/signal-form/signal-form.component';
import { SampleObserComponent } from '../../../pages/temp/page-forms/sample-obser/sample-obser.component';
import { CounterOutPutComponent } from '../../../pages/temp/page-forms/other-form/other-page/counter-out-put/counter-out-put.component';
import { CountControlComponent } from '../../../pages/temp/page-forms/other-form/other-page/count-control/count-control.component';

export const appOtherroutes : Routes = [
  {path:'signal',component:SignalFormComponent},
  { path: "SampleObser", component:SampleObserComponent },
  { path: "CounterOutPut", component:CounterOutPutComponent },
  { path: "CountControl", component:CountControlComponent },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(appOtherroutes)
  ],
  exports:[RouterModule]
})
export class OtherComponentsModule { }
