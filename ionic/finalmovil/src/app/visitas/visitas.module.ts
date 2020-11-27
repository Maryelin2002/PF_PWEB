import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { VisitasPageRoutingModule } from './visitas-routing.module';

import { VisitasPage } from './visitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitasPageRoutingModule,
    HttpClientModule
  ],
  declarations: [VisitasPage]
})
export class VisitasPageModule {}
