import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[repeatElement]'
})
export class UnlessDirective {
  @Input() set repeatElement(condition: any) {
    console.log('condition', condition)
    if (condition) {
      this.viewContainerRef.clear();
    } else {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private templateRef: TemplateRef<any>, 
    private viewContainerRef: ViewContainerRef
  ) { 
    console.log(this.templateRef);
    console.log(this.viewContainerRef);
  }
}
