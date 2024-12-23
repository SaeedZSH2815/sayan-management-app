import { Directive, ElementRef, HostBinding,  Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appToggleBgColorBlue]',
  standalone: true,
})
export class ToggleBgColorBlueDirective {


  @HostBinding('class.bg-blue-500') isp = true;

  constructor(/* Inject Important..... */
              private _element: ElementRef, private _renderer: Renderer2,
              /*private _vcRef: ViewContainerRef Not Inject*/
  ) {
  }



}
