import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private hasView = false;
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this._vcRef.createEmbeddedView(this._templateRef);
      this.hasView = true;
      console.log('cre');
    } else {
      this._vcRef.clear();
      this.hasView = false;
      console.log('clear');
    }
  }

  constructor(private _templateRef: TemplateRef<any>, private _vcRef: ViewContainerRef) { }

}
