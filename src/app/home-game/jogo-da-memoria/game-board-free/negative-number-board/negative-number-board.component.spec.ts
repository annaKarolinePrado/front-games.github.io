import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeNumberBoardComponent } from './negative-number-board.component';

describe('NegativeNumberBoardComponent', () => {
  let component: NegativeNumberBoardComponent;
  let fixture: ComponentFixture<NegativeNumberBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NegativeNumberBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NegativeNumberBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
