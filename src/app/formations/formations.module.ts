import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationsRoutingModule } from './formations-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormationsComponent } from './formations.component';
import { SquadsComponent } from './squads/squads.component';
import { WingsComponent } from './wings/wings.component';
import { CreateWingComponent } from './wings/create-wing/create-wing.component';
import { EditWingComponent } from './wings/edit-wing/edit-wing.component';
import { CreateSquadComponent } from './squads/create-squad/create-squad.component';
import { EditSquadComponent } from './squads/edit-squad/edit-squad.component';


@NgModule({
  declarations: [
    FormationsComponent,
    SquadsComponent,
    WingsComponent,
    CreateWingComponent,
    EditWingComponent,
    CreateSquadComponent,
    EditSquadComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    FormsModule,
    FormationsRoutingModule
  ]
})
export class FormationsModule { }
