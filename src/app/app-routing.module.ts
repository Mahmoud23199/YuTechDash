import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDaseComponent } from './Component/admin-dase/admin-dase.component';

const routes: Routes = [
  {path:'home',component:AdminDaseComponent},
  {path:'**',redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
