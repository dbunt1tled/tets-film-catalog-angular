import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../../models/Film';
import {FilmService} from '../../services/film.service';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.sass']
})
export class FilmCardComponent implements OnInit {
  @Input() film: Film;
  @Input() isFavorite: boolean;
  constructor(
    private _filmService: FilmService
  ) { }

  ngOnInit() {
  }
  checkFavorite(event) {
    event.preventDefault();
    this._filmService.checkFavorite(this.film);
  }
  uncheckFavorite(event) {
    event.preventDefault();
    this._filmService.uncheckFavorite(this.film);
  }
}
