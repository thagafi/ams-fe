import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComputersRoutingModule } from './computers-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComputerComponent } from './add-computer/add-computer.component';
import { EditComputerComponent } from './edit-computer/edit-computer.component';
import { ListComputerComponent } from './list-computer/list-computer.component';
import { ComputersComponent } from './computers.component';


@NgModule({
  declarations: [
    ComputersComponent,
    AddComputerComponent,
    EditComputerComponent,
    ListComputerComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    FormsModule,
    ComputersRoutingModule
  ]
})
export class ComputersModule { }
