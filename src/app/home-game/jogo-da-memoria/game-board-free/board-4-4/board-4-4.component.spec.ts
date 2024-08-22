import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Board44Component } from './board-4-4.component';

describe('Board44Component', () => {
  let component: Board44Component;
  let fixture: ComponentFixture<Board44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Board44Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Board44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
