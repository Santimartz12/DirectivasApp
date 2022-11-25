import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  texto1: string = 'Santiago Martinez'
  color: string = 'red'

  constructor( private fb: FormBuilder){}
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  })

  esValido(valor : string){
    return this.miFormulario.get(valor)?.invalid || false;
  }

  cambiarNombre(){
    this.texto1 = Math.random().toString();
  }

  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}