import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableBoardsComponent } from './available-boards.component';

describe('AvailableBoardsComponent', () => {
  let component: AvailableBoardsComponent;
  let fixture: ComponentFixture<AvailableBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableBoardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailableBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
