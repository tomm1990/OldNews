import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Movie} from "../movie.model";
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-byid',
  templateUrl: 'byid.component.html',
  styleUrls: ['byid.component.css']
})
export class ByidComponent implements OnInit {
  @ViewChild('idVal') id : ElementRef;

  movieSelectedWithId:Movie;

  constructor(private movieService:MovieService) { }

  ngOnInit() {

  }

  searchItem() {
    console.log(`ByidComponent::searchItem() id -> ${this.id.nativeElement.value}`);
    this.movieService.getMoviesById(this.id.nativeElement.value)
      .then((movieSelectedWithId : Movie) => {
        if (movieSelectedWithId.constructor.name == "Array") {
          this.movieSelectedWithId = movieSelectedWithId[0];
          console.log(`ByidComponent() movieSelectedWithId -> ${ this.movieSelectedWithId.name }`);
        }
        else {
          this.movieSelectedWithId = null;
        }
      });
  }
}
