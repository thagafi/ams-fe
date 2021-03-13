import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GranteesComponent } from './grantees.component';

const routes: Routes = [
  {
    path: 'grantees',
    component: GranteesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GranteesRoutingModule { }
