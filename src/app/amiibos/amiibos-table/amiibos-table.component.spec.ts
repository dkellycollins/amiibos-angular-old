import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmiibosTableComponent } from './amiibos-table.component';

describe('AmiibosTableComponent', () => {
  let component: AmiibosTableComponent;
  let fixture: ComponentFixture<AmiibosTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmiibosTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmiibosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
