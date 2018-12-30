import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmiibosListPageComponent } from './amiibos-list-page.component';

describe('AmiibosListPageComponent', () => {
  let component: AmiibosListPageComponent;
  let fixture: ComponentFixture<AmiibosListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmiibosListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmiibosListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
