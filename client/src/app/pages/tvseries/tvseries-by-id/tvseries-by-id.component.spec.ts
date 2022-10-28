import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvseriesByIdComponent } from './tvseries-by-id.component';

describe('TvseriesByIdComponent', () => {
  let component: TvseriesByIdComponent;
  let fixture: ComponentFixture<TvseriesByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvseriesByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvseriesByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
