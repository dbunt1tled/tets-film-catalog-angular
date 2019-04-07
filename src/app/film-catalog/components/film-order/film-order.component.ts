import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../services/film.service';

@Component({
  selector: 'app-film-order',
  templateUrl: './film-order.component.html',
  styleUrls: ['./film-order.component.sass']
})
export class FilmOrderComponent implements OnInit {
  public favoriteCount = 0;
  constructor(
    private _filmService: FilmService
  ) { }

  ngOnInit() {
    this._filmService.getFavorites().subscribe((data: number[]) => {
      return this.favoriteCount = data.length;
    });
  }

}
