import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworksRoutingModule } from './networks-routing.module';
import { NetworksComponent } from './networks.component';


@NgModule({
  declarations: [
    NetworksComponent
  ],
  imports: [
    CommonModule,
    NetworksRoutingModule
  ]
})
export class NetworksModule { }
