import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../services/film.service';
import {Film} from '../../models/Film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.sass']
})
export class FilmsComponent implements OnInit {
  public films: Film[];
  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit() {
    this.filmService.getFilms().subscribe(data => this.films = data);
  }

}
