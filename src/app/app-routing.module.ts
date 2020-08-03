import { PurchasesComponent } from './account/purchases/purchases.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { FavoritesComponent } from './account/favorites/favorites.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  // {path:'login', component: LoginComponent},
  // {path:'signup', component: SignUpComponent},
  {path:'movie/:id', component: MovieDetailsComponent},
  {path: 'movies/genre/:id', component: MovieListComponent},
  {path: 'movies/details/:id', component: MovieDetailsComponent},
  {path: 'account/login', component: LoginComponent},
  {path: 'account/signup', component: SignUpComponent},
  {path: 'User/favorites/:id', component: FavoritesComponent},
  {path: 'User/purchases/:id', component: PurchasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
