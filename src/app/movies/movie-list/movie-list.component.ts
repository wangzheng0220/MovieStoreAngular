import { MovieService } from './../../core/services/movie.service';
import { Movie } from './../../shared/models/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  genreId: number;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // call api to get list of movies by genres, we nned to get genre id from the Url
    // get the genreId from URL and pass it to Movie Service
    this.route.paramMap.subscribe((params) => { //return url
    //getting genreid from URL
      this.genreId = +params.get('id');

      this.movieService.getMoviesByGenre(this.genreId).subscribe((m) => {
        this.movies = m;
        console.log(this.genreId);
        console.table(this.movies);
      });
    });
  }
}
