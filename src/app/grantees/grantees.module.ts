import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GranteesRoutingModule } from './grantees-routing.module';
import { GranteesComponent } from './grantees.component';


@NgModule({
  declarations: [
    GranteesComponent
  ],
  imports: [
    CommonModule,
    GranteesRoutingModule
  ]
})
export class GranteesModule { }
