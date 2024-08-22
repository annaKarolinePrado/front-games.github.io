import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagBoardComponent } from './flag-board.component';

describe('FlagBoardComponent', () => {
  let component: FlagBoardComponent;
  let fixture: ComponentFixture<FlagBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlagBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
