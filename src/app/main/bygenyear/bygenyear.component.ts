import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {MovieService} from "../movie.service";
import {Movie} from "../movie.model";
import {NgForm} from "@angular/forms";
import {Cast} from "../cast.model";
import {isUndefined} from "util";

@Component({
  selector: 'app-bygenyear',
  templateUrl: 'bygenyear.component.html',
  styleUrls: ['bygenyear.component.css']
})
export class BygenyearComponent implements OnInit {
  @ViewChild('genreVal') genreVal : ElementRef;
  @ViewChild('yearVal') yearVal : ElementRef;

  movieSelectedWithGenreAndYear : Movie;
  movieSelectedWithGenreAndYearEnable : boolean;

  constructor(private movieService : MovieService) { }

  ngOnInit() {
    this.movieSelectedWithGenreAndYearEnable = false;
  }

  searchItemByGenreAndYear(){
    console.log(`BygenyearComponent::searchItemByGenreAndYear(${this.genreVal.nativeElement.value},${this.yearVal.nativeElement.value})`);
    this.movieService.getMoviesByGenreAndYear(this.genreVal.nativeElement.value,this.yearVal.nativeElement.value)
      .then((move : Movie) => {
        this.movieSelectedWithGenreAndYear = move ? move[0]: null;
        this.movieSelectedWithGenreAndYearEnable = !isUndefined(this.movieSelectedWithGenreAndYear.name);
        console.log(`BygenyearComponent() searchItemByGenreAndYear -> ${ this.movieSelectedWithGenreAndYear.name }`);

      });
  }
}
