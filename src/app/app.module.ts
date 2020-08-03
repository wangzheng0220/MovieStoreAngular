import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// 3rdy party libraries

import {
  NgbCarouselModule,
  NgbCollapseModule,
  NgbDropdownModule,
  NgbModalModule,
  NgbPaginationModule,
  NgbTabsetModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GenresComponent } from './genres/genres.component';
import { HeaderComponent } from './core/layout/header.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { MoviesComponent } from './movies/movies.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { FavoritesComponent } from './account/favorites/favorites.component';
import { PurchasesComponent } from './account/purchases/purchases.component';
import { ProfileComponent } from './account/profile/profile.component';

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
    MovieCardComponent,
    MoviesComponent,
    MovieListComponent,
    FavoritesComponent,
    PurchasesComponent,
    ProfileComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbCarouselModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbPaginationModule,
    NgbTabsetModule,
    NgbAlertModule,
  ],

  // Dependency Injection
  providers: [],

  // we can select which component needs to be started when application
  // main -->AppMOdule --> bootstrap AppComponent
  bootstrap: [AppComponent],
})

// its and TypeScript class
// Decorators are like Attributes in C#
export class AppModule {}
