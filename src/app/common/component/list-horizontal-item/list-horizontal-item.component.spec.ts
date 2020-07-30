import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHorizontalItemComponent } from './list-horizontal-item.component';

describe('ListHorizontalItemComponent', () => {
  let component: ListHorizontalItemComponent;
  let fixture: ComponentFixture<ListHorizontalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHorizontalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHorizontalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
