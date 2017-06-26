import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {MovieService} from "./movie.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[MovieService]
})
export class MainComponent implements OnInit {
  @Input() loadedFeature : String;

  constructor() { }

  ngOnInit() {
  }
}
