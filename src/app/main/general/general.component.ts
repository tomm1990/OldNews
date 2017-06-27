import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MovieService} from "../movie.service";
import {Movie} from "../movie.model";

@Component({
  selector: 'app-general',
  templateUrl: 'general.component.html',
  styleUrls: ['general.component.css']
})
export class GeneralComponent implements OnInit {
  movieToView : Movie;

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    console.log(`GeneralComponent :: initMovie() `);
    this.movieService.getAllMoviesRaw()
      .then((movie : Movie[]) => {
        if(movie[0]) this.movieToView=movie[0];
      });
  }

  onMovieSelected(movie:Movie){
    console.log(movie);
    this.movieToView = movie;
  }
}
