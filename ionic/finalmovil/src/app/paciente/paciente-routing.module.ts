import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientePage } from './paciente.page';

const routes: Routes = [
  {
    path: '',
    component: PacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientePageRoutingModule {}
