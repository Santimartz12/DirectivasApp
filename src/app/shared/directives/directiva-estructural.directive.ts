import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ensayoApp]'
})
export class DirectivaEstructuralDirective {

  constructor(
    private template: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef,
    ) {
  }

  @Input() set ensayoApp( valor : boolean){
    if(valor){
      this.viewContainer.createEmbeddedView(this.template);
    }else{
      this.viewContainer.clear();
    }
  }

}
