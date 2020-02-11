import { Component, OnInit } from '@angular/core';
import { Coche } from './coches';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {

  public coche : Coche;
  public coches : Array<Coche>;
  public articulos;

  constructor( private peticiones_Servicio : PeticionesService) {
    this.coche = new Coche("","","");
    this.coches = [
      new Coche('Seat','10','Negro'),
      new Coche('Renault','10','Blanco'),
      new Coche('Mazda','10','Azul'),
    ];
   }

  ngOnInit() {
    this.peticiones_Servicio.getArticulos().subscribe(
      res => {
        this.articulos = res;
        console.log(this.articulos)
      }
      );
  }

  onSubmit(){
    console.log(this.coche);
    this.coches.push(this.coche);
    this.coche =  new Coche("","","");
  }

}
