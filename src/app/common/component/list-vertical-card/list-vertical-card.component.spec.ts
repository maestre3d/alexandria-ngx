import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVerticalCardComponent } from './list-vertical-card.component';

describe('ListVerticalCardComponent', () => {
  let component: ListVerticalCardComponent;
  let fixture: ComponentFixture<ListVerticalCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVerticalCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVerticalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
