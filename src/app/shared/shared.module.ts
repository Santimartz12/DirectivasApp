import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { DirectivaEstructuralDirective } from './directives/directiva-estructural.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective,
    DirectivaEstructuralDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorMsgDirective,
    DirectivaEstructuralDirective,
  ]
})
export class SharedModule { }
