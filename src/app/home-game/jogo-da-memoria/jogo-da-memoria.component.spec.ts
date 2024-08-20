import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoDaMemoriaComponent } from './jogo-da-memoria.component';

describe('JogoDaMemoriaComponent', () => {
  let component: JogoDaMemoriaComponent;
  let fixture: ComponentFixture<JogoDaMemoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogoDaMemoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JogoDaMemoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
