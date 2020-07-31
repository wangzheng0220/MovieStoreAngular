import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';


// 3rdy party libraries

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GenresComponent } from './genres/genres.component';
import { HeaderComponent } from './core/layout/header.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';

@NgModule({
  
  // Components,  If you wanna use a Component in Angular they should be declared inside atleast one module
  declarations: [
    AppComponent,
    HomeComponent,
    GenresComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    MovieDetailsComponent,
    MovieCardComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],

  // Dependency Injection
  providers: [],
  
  // we can select which component needs to be started when application 
  // main -->AppMOdule --> bootstrap AppComponent
  bootstrap: [AppComponent]
})

// its and TypeScript class
// Decorators are like Attributes in C#
export class AppModule { }

