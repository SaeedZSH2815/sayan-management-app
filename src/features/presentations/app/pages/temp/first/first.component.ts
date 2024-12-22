import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewEncapsulation, forwardRef } from '@angular/core';

import { CockpitComponent } from '../cockpit/cockpit.component';
import { ServerElementComponent } from "../server-element/server-element.component";
import { CommonModule } from '@angular/common';
import { HighLightBlueDirective } from '../../../../../../core/directives/high-light/high-light-blue.directive';
import { UnlessDirective } from '../../../../../../core/directives/unless/unless.directive';
import { MainComponent } from '../../../main/main.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

@Component({
  selector: 'app-first',
  imports: [CockpitComponent, ServerElementComponent, CommonModule,
    HighLightBlueDirective, UnlessDirective
           ,
  ],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  encapsulation: ViewEncapsulation.None,
 
})
export class FirstComponent implements OnInit {

  condition = true;
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
