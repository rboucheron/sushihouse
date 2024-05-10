import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkcardsComponent } from './drinkcards.component';

describe('DrinkcardsComponent', () => {
  let component: DrinkcardsComponent;
  let fixture: ComponentFixture<DrinkcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrinkcardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrinkcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
