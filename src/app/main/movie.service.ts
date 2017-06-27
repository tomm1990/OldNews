import {Movie} from "./movie.model";
import {Cast} from "./cast.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';

// main service module
@Injectable()
export class MovieService {
  movieSelected = new EventEmitter<Movie>();
  itemAdded = new EventEmitter<Movie[]>();

  herokuUrl:String = "https://oldvod.herokuapp.com";

  private movies: Movie[];

  // Test dummy
  //   = [
  //   new Movie(1,"name1",1111,"genre1","prod1",[new Cast("actor1","role1"),new Cast("actor11","role11")]),
  //   new Movie(2,"name2",2222,"genre2","prod2",[new Cast("actor2","role2")]),
  //   new Movie(3,"name3",3333,"genre3","prod3",[new Cast("actor3","role3"),new Cast("actor33","role33")]),
  // ];

  constructor(private http: Http){}

  private getDataFromDB(){
    this.http.get(`${this.herokuUrl}/getAllMovies`)
      .subscribe((res : Response)=>{
              this.movies = res.json();
              this.itemAdded.next(this.movies);
              console.log(this.movies);
        });
  }

  // Get all movies (subscribe)
  getAllMovies(){
    this.getDataFromDB();
    return this.movies;
  }

  // Gel all movies (promise)
  getAllMoviesRaw() : Promise<Movie[]> {
    console.log(`MovieService::getAllMoviesRaw()`);
    return this.http.get(`${this.herokuUrl}/getAllMovies`)
      .toPromise()
      .then(response => response.json() as Movie[])
      .catch(err => err.json());
  }

  // Get movies by Id (promise)
  // 123 || 344 || 678
  getMoviesById(id: number): Promise<Movie> {
    console.log(`MovieService::getMoviesById ${id}`);
    return this.http.post(`${this.herokuUrl}/getMovieById/`,{movie_id : id})
      .toPromise()
      .then(response => response.json() as Movie)
      .catch(err => err.json());
  }

  // Get movies by name (promise)
  // About Schmidt || Gran Torino || Tough Guys
  getMoviesByName(name:string) : Promise<Movie> {
    console.log(`MovieService::getMoviesByName(${name})`);
    return this.http.post(`${this.herokuUrl}/getCastByMovieName/`,{movie_name:name})
      .toPromise()
      .then(response => response.json() as Movie)
      .catch(err => err.json());
  }

  // Get movies by genre and year (promise)
  // Comedy || Drama || Action
  // 1993 || 2008 || 1986
  getMoviesByGenreAndYear(genre:string,year:Number) : Promise<Movie> {
    console.log(`MovieService::getMoviesByGenreAndYear(${genre},${year})`);
    return this.http.get(`${this.herokuUrl}/getMovieByGenreDate/${genre}/${year}`)
      .toPromise()
      .then(response => response.json() as Movie)
      .catch(err => err.json());
  }

  onAddMovie(movie:Movie){
    this.movies.push(movie);
  }
}
