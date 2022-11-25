import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit {

  private _color   :string = 'red' 
  private _mensaje :string = 'Error';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set validar(valor: boolean){
    this.htmlElement.nativeElement.style.display = !valor ? 'none' : 'block';
  }

  @Input() set mensaje(valor: string){
    this.htmlElement.nativeElement.innerText = valor;
    this._mensaje = valor;
  };

  @Input() set color( valor: string ){
    this.htmlElement.nativeElement.style.color = valor;
    this.htmlElement.nativeElement.classList.add('form-text');
  };

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
    this.htmlElement.nativeElement.style.color = this._color;
  }

}
