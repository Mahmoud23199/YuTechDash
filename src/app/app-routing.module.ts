import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDaseComponent } from './Component/admin-dase/admin-dase.component';
import { NewsUpdateComponent } from './Component/news-update/news-update.component';
import { LoginComponent } from './Component/login/login.component';
import { AuthGuard } from './Services/auth-guard.guard';
import { AddednewsComponent } from './Component/addednews/addednews.component';
import { AuthorInDashComponent } from './Component/author-in-dash/author-in-dash.component';
import { AddedAuthorComponent } from './Component/added-author/added-author.component';
import { UpdateAuthorComponent } from './Component/update-author/update-author.component';

const routes: Routes = [
  {path:'home',canActivate:[AuthGuard],component:AdminDaseComponent},
  {path:'newUpdate/:id',canActivate:[AuthGuard],component:NewsUpdateComponent},
  {path:'authorUpdate/:id',canActivate:[AuthGuard],component:UpdateAuthorComponent},
  {path:'login',component:LoginComponent},
  {path:'addedNews',canActivate:[AuthGuard],component:AddednewsComponent},
  {path:'addedAuthor',canActivate:[AuthGuard],component:AddedAuthorComponent},

  {path:'authorPage',canActivate:[AuthGuard],component:AuthorInDashComponent},
  {path:'**',redirectTo:'login',pathMatch:'full'},
  {path:'',component:AdminDaseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
