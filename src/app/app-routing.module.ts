

import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Importan los componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component'
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';


const appRoutes : Routes = [
  {path : '' , component : HomeComponent},
  {path : 'frutas' , component : FrutaComponent},
  {path : 'empleados', component : EmpleadoComponent},
  {path : 'coches', component : CochesComponent},
  {path : 'formuarioReactivo', component : FormReactiveComponent},
  {path : 'plantillas', component : PlantillasComponent},
  {path : 'pagina-principal', component : HomeComponent},
  {path : 'contactos', component : ContactoComponent},
  {path : 'contactos/:page', component : ContactoComponent},
  {path : '**', component : HomeComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';


// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
