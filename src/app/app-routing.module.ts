import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDaseComponent } from './Component/admin-dase/admin-dase.component';
import { NewsUpdateComponent } from './Component/news-update/news-update.component';
import { LoginComponent } from './Component/login/login.component';
import { AuthGuard } from './Services/auth-guard.guard';
import { AddednewsComponent } from './Component/addednews/addednews.component';

const routes: Routes = [
  {path:'home',canActivate:[AuthGuard],component:AdminDaseComponent},
  {path:'newUpdate/:id',canActivate:[AuthGuard],component:NewsUpdateComponent},
  {path:'login',component:LoginComponent},
  {path:'addedNews',canActivate:[AuthGuard],component:AddednewsComponent},
  {path:'**',redirectTo:'home',pathMatch:'full'},
  {path:'',component:AdminDaseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
