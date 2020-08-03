import { Movie } from './../../shared/models/movie';
import { MovieService } from './../../core/services/movie.service';
import { Favorite } from './../../shared/models/favorite';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: Favorite[];
  userId: number;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => { 
      //getting userid from URL
      this.userId = +params.get('id');
  
      this.movieService.getFavoriteMoviesByUserId(this.userId).subscribe((f) => {
        this.favorites = f;

        console.log(this.userId);
        console.log(this.favorites);
      });
    });
  }
}


