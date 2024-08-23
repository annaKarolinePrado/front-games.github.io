import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogo-da-forca',
  standalone: true,
  imports: [],
  templateUrl: './jogo-da-forca.component.html',
  styleUrl: './jogo-da-forca.component.css'
})
export class JogoDaForcaComponent {
  constructor(private router: Router) {}

  showGameBoardEmojis(): void {
    this.router.navigate(['home-game/jogo-da-forca/forca-board/simple-words-board']);
  }
  showGameBoardFlower(): void {
    this.router.navigate(['home-game/jogo-da-memoria/game-board-free/flower-board']);
  }
  showGameBoardFruit(): void {
    this.router.navigate(['home-game/jogo-da-memoria/game-board-free/fruit-board']);
  }
  showGameBoardHand(): void {
    this.router.navigate(['home-game/jogo-da-memoria/game-board-free/hand-board']);
  }
  showGameBoardNegativeNumber(): void {
    this.router.navigate(['home-game/jogo-da-memoria/game-board-free/negative-number-board']);
  }

  goBack(): void {
    this.router.navigate(['']);
  }
}
