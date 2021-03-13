import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComputerComponent } from './add-computer/add-computer.component';
import { ComputersComponent } from './computers.component';
import { EditComputerComponent } from './edit-computer/edit-computer.component';
import { ListComputerComponent } from './list-computer/list-computer.component';


const routes: Routes = [
  {
    path: 'computers',
    component: ComputersComponent
  },
  {
    path: 'computers/add-computer',
    component: AddComputerComponent
  },
  {
    path: 'computers/:id/edit',
    component: EditComputerComponent
  },
  {
    path: 'computers/list',
    component: ListComputerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComputersRoutingModule { }
