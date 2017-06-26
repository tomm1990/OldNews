import {Cast} from "./cast.model";
export class Movie {
  constructor(public id: Number,
              public name: string,
              public year: Number,
              public genre: string,
              public producer: string,
              public cast: [Cast]) {
  }
}


