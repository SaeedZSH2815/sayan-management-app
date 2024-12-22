import { AfterViewInit, Directive ,ElementRef,HostBinding,HostListener,Input,OnInit,Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighLightBlue]',
  standalone: true,
})
export class HighLightBlueDirective implements OnInit, AfterViewInit {

  @Input({ alias: "appHighLightBlue" }) highLightBlue: string = "";
  @Input({ alias: "defaultColor" }) defaultColor: string = "yellow";
  constructor(private _element: ElementRef, private _renderer: Renderer2) {

  }
    ngAfterViewInit(): void {
  
    }

  ngOnInit(): void {
    //this._renderer.setStyle(this._element.nativeElement,'background-color' ,'blue');
    if (this.highLightBlue !== "")
      this.background_color = this.highLightBlue;
    else {
      this.background_color = this.defaultColor;
    }
    //this._renderer.addClass(this._element.nativeElement, 'bg-blue-400');
    this._renderer.addClass(this._element.nativeElement, 'rounded-lg');
    this._renderer.addClass(this._element.nativeElement, 'px-2');
    this._renderer.addClass(this._element.nativeElement, 'py-2');

    //this._element.nativeElement.style.backgroundColor = '#5f5aee';
    //this._element.nativeElement.style.color = 'black';
 
    }


  @HostBinding('style.background-color') background_color: string = this.defaultColor;

  @HostListener('mouseenter', ['$event']) OnMouseEnter(clMouseEvent: MouseEvent) {
   // console.log(clMouseEvent);
  }

  @HostListener('mouseleave', ['$event']) OnMouseLeave(clMouseEvent: MouseEvent) {
   // console.log(clMouseEvent);
  }

  @HostListener('click', ['$event']) OnClick(clMouseEvent: PointerEvent) {
    console.log(clMouseEvent);
    //this.background_color = 'red';
  }

}
