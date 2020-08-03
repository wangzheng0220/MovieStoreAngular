import { Purchase } from './../../shared/models/purchase';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  purchases: Purchase[];
  userId: number;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => { 
      //getting userid from URL
      this.userId = +params.get('id');
  
      this.movieService.getPurchasedByUserId(this.userId).subscribe((p) => {
        this.purchases = p;

        console.log(this.userId);
        console.log(this.purchases);
      });
    });
  }

}
