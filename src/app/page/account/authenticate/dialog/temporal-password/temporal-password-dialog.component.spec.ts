import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporalPasswordDialogComponent } from './temporal-password-dialog.component';

describe('TemporalPasswordComponent', () => {
  let component: TemporalPasswordDialogComponent;
  let fixture: ComponentFixture<TemporalPasswordDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemporalPasswordDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporalPasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
