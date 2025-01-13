import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignalFormComponent } from '../../../pages/temp/page-forms/other-form/other-page/signal-form/signal-form.component';

export const appOtherroutes : Routes = [
  {path:'signal',component:SignalFormComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(appOtherroutes)
  ],
  exports:[RouterModule]
})
export class OtherComponentsModule { }
