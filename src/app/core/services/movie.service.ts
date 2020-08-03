import { Purchase } from './../../shared/models/purchase';
import { Favorite } from './../../shared/models/favorite';
import { Movie } from './../../shared/models/movie';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private apiService: ApiService) {}

  getTopMovies(): Observable<Movie[]> {
    // http://localhost:58601/api/movies/toprevenue
    return this.apiService.getAll('movies/toprevenue');
  }

  getMoviesByGenre(genreId: number): Observable<Movie[]> {
    return this.apiService.getAll(`${'movies/genre/'}${genreId}`);
  }

  getMovieDetailsById(movieId: number): Observable<Movie> {
    // http://localhost:58601/api/movies/details/movieId
    return this.apiService.getOne('movies/details',movieId);
    // return this.apiService.getOne(`${path}${movieId}`);
  }

  getFavoriteMoviesByUserId(userId: number): Observable<Favorite[]>{
    return this.apiService.getAll(`${'User/favorites/'}${userId}`);
  }

  getPurchasedByUserId(userId: number): Observable<Purchase[]>{
    return this.apiService.getAll(`${'User/purchases/'}${userId}`);
  }
}
