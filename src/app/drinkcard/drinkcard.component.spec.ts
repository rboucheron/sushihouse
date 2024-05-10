import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkcardComponent } from './drinkcard.component';

describe('DrinkcardComponent', () => {
  let component: DrinkcardComponent;
  let fixture: ComponentFixture<DrinkcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrinkcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrinkcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
