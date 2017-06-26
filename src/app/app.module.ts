import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GeneralComponent } from './main/general/general.component';
import { ByidComponent } from './main/byid/byid.component';
import { BynameComponent } from './main/byname/byname.component';
import { BygenyearComponent } from './main/bygenyear/bygenyear.component';
import {Routes, RouterModule} from "@angular/router";
import { MoviesListComponent } from './main/movies-list/movies-list.component';
import { MovieDetailsComponent } from './main/movie-details/movie-details.component';
import { MovieItemComponent } from './main/movies-list/movie-item/movie-item.component';
import { MainComponent } from './main/main.component';

import {MovieService} from './main/movie.service';

const appRoutes : Routes = [
 { path : '' , redirectTo : 'general',pathMatch:'full'},
  { path : 'general' , component : GeneralComponent },
  { path : 'byid' , component : ByidComponent },
  { path : 'byname' , component : BynameComponent },
  { path : 'bygenyear' , component : BygenyearComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GeneralComponent,
    ByidComponent,
    BynameComponent,
    BygenyearComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    MovieItemComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports:[
    RouterModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})

export class AppModule { }
