import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { UpdateconsultaPageRoutingModule } from './updateconsulta-routing.module';

import { UpdateconsultaPage } from './updateconsulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateconsultaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [UpdateconsultaPage]
})
export class UpdateconsultaPageModule {}
