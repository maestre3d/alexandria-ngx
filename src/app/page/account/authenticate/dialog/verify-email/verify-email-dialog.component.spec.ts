import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmailDialogComponent } from './verify-email-dialog.component';

describe('VerifyEmailDialogComponent', () => {
  let component: VerifyEmailDialogComponent;
  let fixture: ComponentFixture<VerifyEmailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyEmailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyEmailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
