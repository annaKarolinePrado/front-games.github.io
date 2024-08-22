import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogo-da-memoria',
  standalone: true,
  imports: [],
  templateUrl: './jogo-da-memoria.component.html',
  styleUrl: './jogo-da-memoria.component.css'
})
export class JogoDaMemoriaComponent {

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['']);
  }

  showGameFree(): void {
    this.router.navigate(['home-game/jogo-da-memoria/game-board-free/available-boards']);
  }

}
