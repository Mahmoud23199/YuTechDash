import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDaseComponent } from './Component/admin-dase/admin-dase.component';
import { NewsUpdateComponent } from './Component/news-update/news-update.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'home',component:AdminDaseComponent},
  {path:'newUpdate/:id',component:NewsUpdateComponent},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'home',pathMatch:'full'},
  {path:'',component:AdminDaseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
