import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxcardsComponent } from './boxcards.component';

describe('BoxcardsComponent', () => {
  let component: BoxcardsComponent;
  let fixture: ComponentFixture<BoxcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxcardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
