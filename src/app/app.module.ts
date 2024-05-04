import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDaseComponent } from './Component/admin-dase/admin-dase.component';
import { SidebarComponent } from './Component/sidebar/sidebar.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NewsUpdateComponent } from './Component/news-update/news-update.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDaseComponent,
    LoginComponent,
    SidebarComponent,
    NavbarComponent,
    NewsUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
