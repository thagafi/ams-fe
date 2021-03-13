import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComsecRoutingModule } from './comsec-routing.module';
import { ComsecComponent } from './comsec.component';


@NgModule({
  declarations: [
    ComsecComponent
  ],
  imports: [
    CommonModule,
    ComsecRoutingModule
  ]
})
export class ComsecModule { }
