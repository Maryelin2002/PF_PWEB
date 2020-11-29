import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CantidadvisitasComponent } from './cantidadvisitas/cantidadvisitas.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { LoginComponent } from './login/login.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { RegistromedicosComponent } from './registromedicos/registromedicos.component';
import { RegistropacienteComponent } from './registropaciente/registropaciente.component';
import { VisitasfechaComponent } from './visitasfecha/visitasfecha.component';
import { ZodiacoComponent } from './zodiaco/zodiaco.component';
import {ListapacientesComponent} from './listapacientes/listapacientes.component';
import { ActualizarPacienteComponent } from './actualizar-paciente/actualizar-paciente.component';
import { UpdateconsultaComponent } from './updateconsulta/updateconsulta.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'medicos', component: RegistromedicosComponent},
  {path: 'pagina', component: PaginaprincipalComponent},
  {path: 'paciente', component: RegistropacienteComponent},
  {path: 'consulta', component: ConsultaComponent},
  {path: 'zodiaco', component: ZodiacoComponent},
  {path: 'visitafecha', component: VisitasfechaComponent},
  {path: 'cantidad', component: CantidadvisitasComponent},
  {path: 'listapacientes', component: ListapacientesComponent},
  {path: 'updateP', component: ActualizarPacienteComponent},
  {path: 'updateC', component: UpdateconsultaComponent},
  {path:'', redirectTo: '/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
