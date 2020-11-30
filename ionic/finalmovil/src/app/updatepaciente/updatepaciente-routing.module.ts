import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatepacientePage } from './updatepaciente.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatepacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatepacientePageRoutingModule {}
