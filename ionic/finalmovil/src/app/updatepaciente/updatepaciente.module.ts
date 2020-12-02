import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { UpdatepacientePageRoutingModule } from './updatepaciente-routing.module';

import { UpdatepacientePage } from './updatepaciente.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    UpdatepacientePageRoutingModule,
    HttpClientModule
  ],
  declarations: [UpdatepacientePage]
})
export class UpdatepacientePageModule {}
