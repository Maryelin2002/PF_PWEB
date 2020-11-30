import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateconsultaPage } from './updateconsulta.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateconsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateconsultaPageRoutingModule {}
