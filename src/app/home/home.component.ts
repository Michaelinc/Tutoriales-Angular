import { Component, OnInit } from '@angular/core';
import { RopaService } from '../service/ropa.service';
RopaService

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService]
})
export class HomeComponent implements OnInit {


  title = "Pagina Principal";
  public listado_ropa: Array<string>;
  public prenda_a_guardar:string;
  public fecha;
  public nombre = "Michael Steven ReNdon";

  constructor(private _ropaService : RopaService) { 
    this.fecha = new Date(2020,2,15);
  }

  ngOnInit() {
    this.listado_ropa = this._ropaService.getRopa();
    console.log(this._ropaService.prueba('cCamiseta Nike'));
    console.log(this.listado_ropa);
  }
  guardarPrenda(){
    this._ropaService.addRopa(this.prenda_a_guardar);
    this.prenda_a_guardar = null;
  }
  eliminarPrenda(index : number){
    this._ropaService.deleteRopa(index);
    alert(index);
  }

}
