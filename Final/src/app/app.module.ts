import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistromedicosComponent } from './registromedicos/registromedicos.component';
import { LoginComponent } from './login/login.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { RegistropacienteComponent } from './registropaciente/registropaciente.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ZodiacoComponent } from './zodiaco/zodiaco.component';
import { VisitasfechaComponent } from './visitasfecha/visitasfecha.component';
import { CantidadvisitasComponent } from './cantidadvisitas/cantidadvisitas.component';
import { from } from 'rxjs';
import { ListapacientesComponent } from './listapacientes/listapacientes.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ActualizarPacienteComponent } from './actualizar-paciente/actualizar-paciente.component';
import { UpdateconsultaComponent } from './updateconsulta/updateconsulta.component'


@NgModule({
  declarations: [
    AppComponent,
    RegistromedicosComponent,
    LoginComponent,
    PaginaprincipalComponent,
    RegistropacienteComponent,
    ConsultaComponent,
    ZodiacoComponent,
    VisitasfechaComponent,
    CantidadvisitasComponent,
    ListapacientesComponent,
    ActualizarPacienteComponent,
    UpdateconsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
