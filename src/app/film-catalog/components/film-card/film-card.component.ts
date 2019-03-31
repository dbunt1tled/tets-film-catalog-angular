import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../../models/Film';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.sass']
})
export class FilmCardComponent implements OnInit {
  @Input() film: Film;
  constructor() { }

  ngOnInit() {
  }

}
