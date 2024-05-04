import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDaseComponent } from './Component/admin-dase/admin-dase.component';
import { NewsUpdateComponent } from './Component/news-update/news-update.component';
import { LoginComponent } from './Component/login/login.component';
import { AuthGuard } from './Services/auth-guard.guard';

const routes: Routes = [
  {path:'home',canActivate:[AuthGuard],component:AdminDaseComponent},
  {path:'newUpdate/:id',canActivate:[AuthGuard],component:NewsUpdateComponent},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'home',pathMatch:'full'},
  {path:'',component:AdminDaseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
