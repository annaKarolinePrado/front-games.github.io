import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBoardLevelMediumComponent } from './game-board-level-medium.component';

describe('GameBoardLevelMediumComponent', () => {
  let component: GameBoardLevelMediumComponent;
  let fixture: ComponentFixture<GameBoardLevelMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameBoardLevelMediumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameBoardLevelMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
