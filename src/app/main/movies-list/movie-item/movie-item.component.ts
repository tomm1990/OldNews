import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Movie} from "../../movie.model";
import {MovieService} from "../../movie.service";

@Component({
  selector: 'app-movie-item',
  templateUrl: 'movie-item.component.html',
  styleUrls: ['movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie : Movie;
  @Output() movieSelected = new EventEmitter<Movie>();

  constructor() {

  }

  ngOnInit() {

  }

  onSelected(){
    this.movieSelected.emit(this.movie);
  }

}
