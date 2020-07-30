import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVerticalItemComponent } from './list-vertical-item.component';

describe('ListVerticalSmallCardComponent', () => {
  let component: ListVerticalItemComponent;
  let fixture: ComponentFixture<ListVerticalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVerticalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVerticalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
