import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutingProviders, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import {FormsModule} from '@angular/forms';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ConversorPipe } from './pipes/conversor.pipe';
import { CochesComponent } from './coches/coches.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FormReactiveComponent } from './form-reactive/form-reactive.component'



@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,
    CochesComponent,
    PlantillasComponent,
    FormReactiveComponent

  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
