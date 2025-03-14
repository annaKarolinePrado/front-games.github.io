import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBoardTimedComponent } from './game-board-timed.component';

describe('GameBoardTimedComponent', () => {
  let component: GameBoardTimedComponent;
  let fixture: ComponentFixture<GameBoardTimedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameBoardTimedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameBoardTimedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
