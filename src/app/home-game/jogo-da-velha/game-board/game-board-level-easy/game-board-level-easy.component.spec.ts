import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBoardLevelEasyComponent } from './game-board-level-easy.component';

describe('GameBoardLevelEasyComponent', () => {
  let component: GameBoardLevelEasyComponent;
  let fixture: ComponentFixture<GameBoardLevelEasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameBoardLevelEasyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameBoardLevelEasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
