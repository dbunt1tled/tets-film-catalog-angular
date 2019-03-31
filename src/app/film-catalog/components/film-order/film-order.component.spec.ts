import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmOrderComponent } from './film-order.component';

describe('FilmOrderComponent', () => {
  let component: FilmOrderComponent;
  let fixture: ComponentFixture<FilmOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
