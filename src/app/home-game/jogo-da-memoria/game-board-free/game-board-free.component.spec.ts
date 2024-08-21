import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBoardFreeComponent } from './game-board-free.component';

describe('GameBoardFreeComponent', () => {
  let component: GameBoardFreeComponent;
  let fixture: ComponentFixture<GameBoardFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameBoardFreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameBoardFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
