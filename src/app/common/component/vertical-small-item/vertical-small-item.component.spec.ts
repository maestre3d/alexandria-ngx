import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalSmallItemComponent } from './vertical-small-item.component';

describe('VerticalSmallItemComponent', () => {
  let component: VerticalSmallItemComponent;
  let fixture: ComponentFixture<VerticalSmallItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalSmallItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalSmallItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
