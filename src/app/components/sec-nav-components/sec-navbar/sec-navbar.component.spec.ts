import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecNavbarComponent } from './sec-navbar.component';

describe('SecNavbarComponent', () => {
  let component: SecNavbarComponent;
  let fixture: ComponentFixture<SecNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
