import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalItemComponent } from './vertical-item.component';

describe('VerticalSmallItemComponent', () => {
  let component: VerticalItemComponent;
  let fixture: ComponentFixture<VerticalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
