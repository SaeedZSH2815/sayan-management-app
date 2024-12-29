import { CommonModule } from '@angular/common';
import { CompilerConfig } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-info',
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent implements OnInit,OnDestroy {
  userId? : number;
  routeSubscribtion? : Subscription;
  constructor(private activatedRoute : ActivatedRoute){

  if(this.activatedRoute.snapshot.params)
  {

    this.userId = this.activatedRoute.snapshot.params['id']
  }



 }
  ngOnDestroy(): void {
    if(this.routeSubscribtion){
      this.routeSubscribtion.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.routeSubscribtion = this.activatedRoute.params.subscribe(
      (param : Params)=>{
        if (param['id'])
        {
         this.userId = param['id'];
         console.log("param : ",param['id']);
        }
      }
    );
  }
}
