import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmiiboSeriesNavigationComponent } from './amiibo-series-navigation.component';

describe('AmiiboSeriesNavigationComponent', () => {
  let component: AmiiboSeriesNavigationComponent;
  let fixture: ComponentFixture<AmiiboSeriesNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmiiboSeriesNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmiiboSeriesNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
