import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FechaPage } from './fecha.page';

const routes: Routes = [
  {
    path: '',
    component: FechaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FechaPageRoutingModule {}
