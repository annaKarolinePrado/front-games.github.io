import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojisBoardComponent } from './emojis-board.component';

describe('EmojisBoardComponent', () => {
  let component: EmojisBoardComponent;
  let fixture: ComponentFixture<EmojisBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmojisBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmojisBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
