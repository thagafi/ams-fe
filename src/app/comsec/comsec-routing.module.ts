import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComsecComponent } from './comsec.component';

const routes: Routes = [
  {
    path: 'comsec',
    component: ComsecComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComsecRoutingModule { }
