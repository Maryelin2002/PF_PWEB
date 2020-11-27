import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { PacientePageRoutingModule } from './paciente-routing.module';

import { PacientePage } from './paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacientePageRoutingModule,
    HttpClientModule
  ],
  declarations: [PacientePage]
})
export class PacientePageModule {}
