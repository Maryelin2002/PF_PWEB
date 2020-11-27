import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ZodiacoPageRoutingModule } from './zodiaco-routing.module';

import { ZodiacoPage } from './zodiaco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZodiacoPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ZodiacoPage]
})
export class ZodiacoPageModule {}
