import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByBrandComponent } from './product-by-brand.component';

describe('ProductByBrandComponent', () => {
  let component: ProductByBrandComponent;
  let fixture: ComponentFixture<ProductByBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductByBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductByBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
