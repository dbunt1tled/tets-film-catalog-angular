import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../services/film.service';
import {FilmApiService} from '../../../api/film/film-api.service';

@Component({
  selector: 'app-film-order',
  templateUrl: './film-order.component.html',
  styleUrls: ['./film-order.component.sass']
})
export class FilmOrderComponent implements OnInit {
  public favoriteCount = 0;
  public sortOrder = FilmApiService.SORT_BY_ORIGINAL_TITLE_DESC;
  public sortSelector = FilmApiService.sortSelector;
  constructor(
    private _filmService: FilmService
  ) { }

  ngOnInit() {
    this._filmService.setSortOrder(this.sortOrder);
    this._filmService.getFavorites().subscribe((data: number[]) => {
      return this.favoriteCount = data.length;
    });
    this._filmService.getSortOrder().subscribe(data => {
      return this.sortOrder = data;
    });
  }
  onChange(event) {
    this._filmService.setSortOrder(event.value);
  }
}
