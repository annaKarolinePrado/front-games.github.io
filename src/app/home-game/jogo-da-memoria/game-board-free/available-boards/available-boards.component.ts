import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-available-boards',
  standalone: true,
  imports: [],
  templateUrl: './available-boards.component.html',
  styleUrl: './available-boards.component.css'
})
export class AvailableBoardsComponent {
  constructor(private router: Router) {}

  showGameBoardEmojis(): void {
    this.router.navigate(['home-game/jogo-da-memoria/game-board-free/emojis-board']);
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
    this.router.navigate(['/home-game']);
  }
}
