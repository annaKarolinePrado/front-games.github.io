import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleWordsBoardComponent } from './simple-words-board.component';

describe('SimpleWordsBoardComponent', () => {
  let component: SimpleWordsBoardComponent;
  let fixture: ComponentFixture<SimpleWordsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleWordsBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleWordsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
