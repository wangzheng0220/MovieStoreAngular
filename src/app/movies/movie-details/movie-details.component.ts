
import { ActivatedRoute } from '@angular/router';
import { Cast } from './../../shared/models/cast';
import { Movie } from './../../shared/models/movie';
import { MovieService } from './../../core/services/movie.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie; //single movie, define Movie in getMovieDetailsById
  movieId: number;
  //casts : Cast[];
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      // getting movieId from URL
      this.movieId = +params.get('id');

      this.movieService.getMovieDetailsById(this.movieId).subscribe((m)=>{ //read data use subscribe
        this.movie = m;

        console.log(this.movieId);
        console.log(this.movie);
        console.log(this.movie.movieCasts);
      })
    }
    
    )

  }

}
