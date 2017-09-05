import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  list : String[];
  index : any;
  src : String;

  player: YT.Player;
  private id: string = 'snpatsa1kRw';

  savePlayer (player) {
    this.player = player;
    console.log('player instance', player)
  }

  onStateChange(event){
    console.log('player state', event.data);
  }


  constructor() {
    // this.list  = [
    //   "http://mediadownload.ynet.co.il/upl/525/586.mp3",
    //   "http://www.canopy.hu/flash/music_orig/Linkin%20Park%20-%20What%20Ive%20Done.mp3"
    // ];

  }

  ngOnInit() {
    // console.log(`PlayerComponent::ngOnInit()`);
    // this.index = 0;
    // this.src = this.list[this.index];
  }

  next(){
    // this.index++;
    // this.index = this.index % this.list.length;
    // this.src = this.list[this.index];
    // console.log(`next() :: this.index(${this.index}) :: this.list[${this.index}](${this.list[this.index]})`);
  }

  prev(){
    // this.index--;
    // this.index = this.index % this.list.length;
    // if(this.index<0) this.index = this.list.length-1;
    // this.src = this.list[this.index];
    // console.log(`prev() :: this.index(${this.index}) :: this.list[${this.index}](${this.list[this.index]})`);
  }



}
