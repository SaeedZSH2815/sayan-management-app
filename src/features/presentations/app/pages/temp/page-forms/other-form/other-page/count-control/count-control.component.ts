import { AsyncPipe } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IncrementAction } from '../../../../../../main/store-ngrx/store-count/action-count/increment-action';
import { AppUtility } from '../../../../../../../../../utils/utility';
import { selectconterFn } from '../../../../../../main/store-ngrx/store-count/counter-selectors/select-count';
import { SignalRService } from '../../../../../../../../../core/services/signalr.service';

@Component({
  selector: 'app-count-control',
  imports: [AsyncPipe],
  templateUrl: './count-control.component.html',
  styleUrl: './count-control.component.scss'
})
export class CountControlComponent implements OnInit,OnDestroy {

  count$? : Observable<{conterFn : {age:number;firstName:string}}>;
  count2$? : Observable<number>;
  countSubs? : Subscription;
  @ViewChild("msginput") msginput? : ElementRef;
  constructor(
    private s : SignalRService,
    private store   : Store<{conterFn : {age:number;firstName:string}}>,
           //   private storeFn : Store<{counter : {age:number;firstName:string}}>
  ){

  //  this.count2$ = this.storeFn.select('conterFnReducer');
  //  this.count$ = this.store.select('conterFn');
     this.count$ = this.store.select(selectconterFn);
     this.s.start();
     this.s.receiveMessage().subscribe(
      (c)=>console.log("1:"+c)
     );
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
console.log(this.msginput!);
    this.s.SendMessage(this.msginput?.nativeElement["value"]);
  }

}
