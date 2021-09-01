import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './main/create/create.component';
import { DetailsComponent } from './main/list/details/details.component';
import { EditComponent } from './main/edit/edit.component';
import { ListComponent } from './main/list/list.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'details/:id', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
