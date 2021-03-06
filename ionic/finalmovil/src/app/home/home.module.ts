import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';


import { HomePageRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
