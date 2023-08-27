import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotOffersComponent } from './hot-offers.component';

describe('HotOffersComponent', () => {
  let component: HotOffersComponent;
  let fixture: ComponentFixture<HotOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
