import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IncrementAction } from '../../../../../../main/store-ngrx/store-count/action-count/increment-action';
import { AppUtility } from '../../../../../../../../../utils/utility';

@Component({
  selector: 'app-count-control',
  imports: [AsyncPipe],
  templateUrl: './count-control.component.html',
  styleUrl: './count-control.component.scss'
})
export class CountControlComponent implements OnInit,OnDestroy {

  count$? : Observable<{age:number,firstName:string}>;
  count2$? : Observable<number>;
  countSubs? : Subscription;

  constructor(private store   : Store<{conterFn : {age:number;firstName:string}}>,
           //   private storeFn : Store<{counter : {age:number;firstName:string}}>
  ){

  //  this.count2$ = this.storeFn.select('conterFnReducer');
    this.count$ = this.store.select('conterFn');
    //this.countSubs = this.count$.subscribe(console.log)

  }


  ngOnDestroy(): void {
    if(this.countSubs)
      this.countSubs.unsubscribe();


  }
  ngOnInit(): void {

  }

  increment(){

    this.store.dispatch(IncrementAction({fName:"saeed"}));
  }

}
