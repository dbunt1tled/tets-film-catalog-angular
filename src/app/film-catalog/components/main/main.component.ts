import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  public webSite = {
    url: 'http://loclahost:4200',
    webName: 'Film Catalog'
  };
  constructor() { }

  ngOnInit() {
  }

}
