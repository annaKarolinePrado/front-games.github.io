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

  showGameFree(): void {
    this.router.navigate(['home-game/jogo-da-memoria/game-board-free/available-boards']);
  }

  temas = [
    { path: 'home-game/jogo-da-memoria/game-board-free/animals' },
    { path: 'home-game/jogo-da-memoria/game-board-free/emojis-board' },
    { path: 'home-game/jogo-da-memoria/game-board-free/flower-board' },
    { path: 'home-game/jogo-da-memoria/game-board-free/fruit-board' },
    { path: 'home-game/jogo-da-memoria/game-board-free/hand-board' },
    { path: 'home-game/jogo-da-memoria/game-board-free/negative-number-board' },
    { path: 'home-game/jogo-da-memoria/game-board-free/symbols' },
    { path: 'home-game/jogo-da-memoria/game-board-free/traffic-signs' },
  ];

  escolherTemaAleatorio() {
    const temaAleatorio = this.temas[Math.floor(Math.random() * this.temas.length)];
    this.router.navigate([temaAleatorio.path]);
  }

  goBack(): void {
    this.router.navigate(['']);
  }

}
