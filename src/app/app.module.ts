import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDaseComponent } from './Component/admin-dase/admin-dase.component';
import { SidebarComponent } from './Component/sidebar/sidebar.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsUpdateComponent } from './Component/news-update/news-update.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDaseComponent,
    SidebarComponent,
    NavbarComponent,
    NewsUpdateComponent,
    LoginComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule ,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
