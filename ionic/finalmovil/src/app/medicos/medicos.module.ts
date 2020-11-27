import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicosPageRoutingModule } from './medicos-routing.module';

import { MedicosPage } from './medicos.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicosPageRoutingModule,
    HttpClientModule
  ],
  declarations: [MedicosPage]
})
export class MedicosPageModule {}
