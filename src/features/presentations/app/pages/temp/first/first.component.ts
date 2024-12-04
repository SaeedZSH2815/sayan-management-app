import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CockpitComponent } from '../cockpit/cockpit.component';
import { ServerElementComponent } from "../server-element/server-element.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first',
  imports: [CockpitComponent, ServerElementComponent,CommonModule],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class FirstComponent implements OnInit {
  ngOnInit(): void {
    //this.serverElementList = new;
  }

  serverElementList?: { type: number, name: string, content: string }[] = [];

  OnAddServer(clValue: { serverName: string, serverContent: string }) {

    this.serverElementList?.push({ type: 1, content: clValue.serverContent, name: clValue.serverName})
    console.log(this.serverElementList);
  }

  OnAddServerBlue(clValue: { serverName: string, serverContent: string }) {
    this.serverElementList?.push({ type: 2, content: clValue.serverContent, name: clValue.serverName })
  }

}
