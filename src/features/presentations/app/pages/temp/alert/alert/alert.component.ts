import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';


import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent implements OnDestroy {


  constructor(){}
  message :string = "";
  @Output() close = new EventEmitter<void>();

  onClose(){

    this.close.emit();
  }
  ngOnDestroy(): void {

  }
}
