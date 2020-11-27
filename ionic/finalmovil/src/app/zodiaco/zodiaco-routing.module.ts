import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZodiacoPage } from './zodiaco.page';

const routes: Routes = [
  {
    path: '',
    component: ZodiacoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZodiacoPageRoutingModule {}
