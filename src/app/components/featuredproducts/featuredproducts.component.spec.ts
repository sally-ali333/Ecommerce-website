import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedproductsComponent } from './featuredproducts.component';

describe('FeaturedproductsComponent', () => {
  let component: FeaturedproductsComponent;
  let fixture: ComponentFixture<FeaturedproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
