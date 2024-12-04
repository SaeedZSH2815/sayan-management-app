import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  imports: [CommonModule],
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.scss'
})
export class ServerElementComponent implements OnInit {
  ngOnInit(): void {

  }
  @Input({ alias: "srvElement", required: true }) element: { type: number, name: string, content: string } =
  { name:"", content:"",type:0 }
;
}
