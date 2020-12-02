import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicosPageRoutingModule } from './medicos-routing.module';

import { MedicosPage } from './medicos.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    MedicosPageRoutingModule,
    HttpClientModule
  ],
  declarations: [MedicosPage]
})
export class MedicosPageModule {}
