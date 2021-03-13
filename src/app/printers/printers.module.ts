import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintersRoutingModule } from './printers-routing.module';
import { PrintersComponent } from './printers.component';


@NgModule({
  declarations: [
    PrintersComponent
  ],
  imports: [
    CommonModule,
    PrintersRoutingModule
  ]
})
export class PrintersModule { }
