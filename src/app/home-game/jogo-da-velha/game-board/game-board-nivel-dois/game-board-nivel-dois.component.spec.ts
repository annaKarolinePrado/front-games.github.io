import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBoardNivelDoisComponent } from './game-board-nivel-dois.component';

describe('GameBoardNivelDoisComponent', () => {
  let component: GameBoardNivelDoisComponent;
  let fixture: ComponentFixture<GameBoardNivelDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameBoardNivelDoisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameBoardNivelDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
