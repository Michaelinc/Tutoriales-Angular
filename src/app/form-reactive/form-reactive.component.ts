import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from "@angular/forms/"

@Component({
  selector: 'form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent {

  singupForm : FormGroup;

  constructor(
    private _builder: FormBuilder
  ){
    this.singupForm = this._builder.group({
      nombre :[''] ,
      usuario :['',Validators.required] ,
      email: ['', Validators.compose([Validators.required, Validators.email])],
      clave:['', Validators.required] 
    });
  }


  enviar(value){
    console.log(value);
  }

}
