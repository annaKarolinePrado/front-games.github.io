import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerBoardComponent } from './flower-board.component';

describe('FlowerBoardComponent', () => {
  let component: FlowerBoardComponent;
  let fixture: ComponentFixture<FlowerBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowerBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlowerBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
