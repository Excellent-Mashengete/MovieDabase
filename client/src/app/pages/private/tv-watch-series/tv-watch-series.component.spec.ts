import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvWatchSeriesComponent } from './tv-watch-series.component';

describe('TvWatchSeriesComponent', () => {
  let component: TvWatchSeriesComponent;
  let fixture: ComponentFixture<TvWatchSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvWatchSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvWatchSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
