import { AsyncPipe, CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IncrementAction } from '../../../../../../main/store-ngrx/store-count/action-count/increment-action';
import { AppUtility } from '../../../../../../../../../utils/utility';
import { selectconterFn } from '../../../../../../main/store-ngrx/store-count/counter-selectors/select-count';
import { SignalRService } from '../../../../../../../../../core/services/signalr.service';
import { increment } from '../../../../../../main/store-ngrx/store/counter.actions';

@Component({
  selector: 'app-count-control',
  imports: [AsyncPipe,CommonModule],
  templateUrl: './count-control.component.html',
  styleUrl: './count-control.component.scss'
})
export class CountControlComponent implements OnInit,OnDestroy,AfterViewInit {


  countSubs? : Subscription;
  Message : string = '';
  @ViewChild("msginput") msginput? : ElementRef;
  MsgSubs? : Subscription;

  constructor(
         private s : SignalRService,

      //   private store : Store<{counter:number}>
  ){



  //  this.count$ = this.store.select('conterFn');
 //    this.count2$ = this.store.select('counter');

    //this.countSubs = this.count$.subscribe(console.log)

    console.log('jjjjjjjjjjjj')

    // this.s.start().subscribe(

    //   (res)=>{
    //     console.log("start",res)
    //     if(res){
    //       this.MsgSubs =  this.s.receiveMessage().subscribe(     (msg)=>this.Message = msg  );
    //       }
    //   }

    //  );



  }
  ngAfterViewInit(): void {
    //  this.store.select('counter').subscribe((v)=>
    //   this.Message = v+"" );
  }


  ngOnDestroy(): void {



  }
  ngOnInit(): void {

  }

  increment(){


    // this.s.SendMessage(this.msginput?.nativeElement["value"]).catch(
    //    (error)=>{
    //     if(this.MsgSubs)
    //      this.MsgSubs.unsubscribe();
    //     this.MsgSubs =  this.s.receiveMessage().subscribe(     (msg)=>this.Message = msg  );
    //    }
    // );
  }



  sumNumber(a:number,b:number):number{
    return a + b;
  }
}
