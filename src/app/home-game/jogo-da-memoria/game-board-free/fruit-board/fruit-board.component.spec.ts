import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitBoardComponent } from './fruit-board.component';

describe('FruitBoardComponent', () => {
  let component: FruitBoardComponent;
  let fixture: ComponentFixture<FruitBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
