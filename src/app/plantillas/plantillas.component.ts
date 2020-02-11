import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent implements OnInit {
    public title;
    public administrador;

  constructor() { 
    this.title = "Plantillas ngTemplate en Angular";
    this.administrador = true;
  }

  ngOnInit() {
  }
  cambiar(value){
    this.administrador = value;
  }

}
