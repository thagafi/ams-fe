import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSquadComponent } from './squads/create-squad/create-squad.component';
import { EditSquadComponent } from './squads/edit-squad/edit-squad.component';
import { SquadsComponent } from './squads/squads.component';
import { CreateWingComponent } from './wings/create-wing/create-wing.component';
import { EditWingComponent } from './wings/edit-wing/edit-wing.component';
import { WingsComponent } from './wings/wings.component';

const routes: Routes = [
  {
    path: 'formations/wings',
    component: WingsComponent
  }, 
  {
    path: 'formations/squads',
    component: SquadsComponent
  },
  {
    path: 'formations/wings/create',
    component: CreateWingComponent
  },
  {
    path: 'formations/wings/:id/edit',
    component: EditWingComponent
  },
  {
    path: 'formations/squads/create',
    component: CreateSquadComponent
  },
  {
    path: 'formations/squads/:id/edit',
    component: EditSquadComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationsRoutingModule { }
