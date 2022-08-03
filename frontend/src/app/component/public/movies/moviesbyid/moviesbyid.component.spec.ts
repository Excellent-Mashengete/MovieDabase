import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesbyidComponent } from './moviesbyid.component';

describe('MoviesbyidComponent', () => {
  let component: MoviesbyidComponent;
  let fixture: ComponentFixture<MoviesbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
