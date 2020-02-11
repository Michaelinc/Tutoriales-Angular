import { Component, OnInit, ɵConsole } from '@angular/core';
import {Fruta} from './fruta';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent implements OnInit {

  titulo: String = 'Curso de Type';

  public nombre_componente = 'Componente fruta';
  public fruta:Fruta;
  public frutas:Array<Fruta>;
  public color:string;
  public color_seleccionado:string;

  
  constructor() { 
    this.fruta = new Fruta("Guayaba",1,"Agria",true);
    this.frutas = [
      new Fruta("Guayaba",1,"Agria",false),
      new Fruta("Pera",3,"Dulce",false),
      new Fruta("Manzana",2,"Verde",true)
    ];
    this.color = 'red';
    this.color_seleccionado = '#ccc';
  }

  holaMundo(){
    alert('Hola mundo!!');
  }

  logColorSeleccionado(){
    console.log(this.color_seleccionado)
  }
    
  ngOnInit() {
    console.log(this.fruta);
    console.log(this.frutas)
  }

}
