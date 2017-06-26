import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {MovieService} from "../movie.service";
import {Movie} from "../movie.model";
import {isUndefined} from "util";

@Component({
  selector: 'app-byname',
  templateUrl: 'byname.component.html',
  styleUrls: ['byname.component.css']
})
export class BynameComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;

  movieSelectedWithName:Movie;
  movieEnable:boolean;

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movieEnable = false;
  }

  searchItemByName() {
    console.log(`BynameComponent :: searchItemByName(${this.nameInputRef.nativeElement.value}) `);
    this.movieService.getMoviesByName(this.nameInputRef.nativeElement.value)
      .then((move : Movie) => {
        this.movieSelectedWithName = move ? move[0] : null;
        this.movieEnable = !isUndefined(this.movieSelectedWithName.name)  ;
        console.log(`BynameComponent :: searchItemByName() finished -> ${this.movieSelectedWithName.name}`);
      });
  }
}
