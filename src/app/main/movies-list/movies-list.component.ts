import { Component, OnInit } from '@angular/core';
import {Movie} from "../movie.model";
import {Cast} from "../cast.model";
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-movies-list',
  templateUrl: 'movies-list.component.html',
  styleUrls: ['movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movieSelected : Movie;
  movies:Movie[];

  // Test dummy
  // movies: Movie[] = [
  //   new Movie(1,"name1",1111,"genre1","prod1",[new Cast("actor1","role1"),new Cast("actor11","role11")]),
  //   new Movie(2,"name2",2222,"genre2","prod2",[new Cast("actor2","role2")]),
  //   new Movie(3,"name3",3333,"genre3","prod3",[new Cast("actor3","role3"),new Cast("actor33","role33")]),
  // ];

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getAllMovies();
    this.movieService.itemAdded.subscribe((movie:Movie[])=>{
      this.movies = movie;
    });
  }

  onMovieSelected(movie:Movie){
    console.log(movie);
    this.movieSelected = movie;
  }
}
