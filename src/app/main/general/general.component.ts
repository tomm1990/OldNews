import { Component, OnInit } from '@angular/core';
import {MovieService} from "../movie.service";
import {Movie} from "../movie.model";

@Component({
  selector: 'app-general',
  templateUrl: 'general.component.html',
  styleUrls: ['general.component.css']
})
export class GeneralComponent implements OnInit {
  movieSelected:Movie;

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movieService.itemSelected.subscribe(
      (movie:Movie)=>{
        this.movieSelected = movie;
      });
    this.initMovie();
  }

  initMovie() {
    console.log(`GeneralComponent :: initMovie() `);
    this.movieService.getAllMoviesRaw()
      .then((movie : Movie) => {
        if (movie.constructor.name == "Array") {
          this.movieSelected = movie[0];
        }
        else {
          this.movieSelected = null;
        }
      });
  }
}
