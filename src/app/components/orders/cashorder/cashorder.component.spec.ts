import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashorderComponent } from './cashorder.component';

describe('CashorderComponent', () => {
  let component: CashorderComponent;
  let fixture: ComponentFixture<CashorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
