import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-cockpit',
  imports: [FormsModule,  CommonModule],
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.scss',

})
export class CockpitComponent {
  public newServerName: string = "";
  public newServerContent: string = "";

  @Output('addServer')     serverCreateEmitter = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('addServerBlue') serverCreateBlueEmitter = new EventEmitter<{ serverName: string, serverContent: string }>();

  @ViewChild('ServerName')  ServerName? : ElementRef;

  OnChange(clEvent: any):void {
    //this.newServerName    = clEvent["value"];
    //this.newServerContent = clEvent["value"];
  }
  AddServer(clEvent: any): void {
    console.log(this.ServerName?.nativeElement["value"]);
    if (typeof clEvent === 'object') {
      switch (clEvent["id"]) {
        case "addServerId":
          {
            this.serverCreateEmitter.emit({ serverContent: this.newServerContent, serverName: this.newServerName });
            break;
          }
        case "addServerBlueId":
          {
            this.serverCreateBlueEmitter.emit({ serverContent: this.newServerContent, serverName: this.newServerName });
            break;
          }
      }

      }




  }


}
