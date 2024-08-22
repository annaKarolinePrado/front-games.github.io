import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-negative-number-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './negative-number-board.component.html',
  styleUrl: './negative-number-board.component.css'
})
export class NegativeNumberBoardComponent {

  cards = [
    { id: 1, number: -1, revealed: false },
    { id: 2, number: -2, revealed: false },
    { id: 3, number: -3, revealed: false },
    { id: 4, number: -4, revealed: false },
    { id: 5, number: -5, revealed: false },
    { id: 6, number: -6, revealed: false },
    { id: 7, number: -1, revealed: false },
    { id: 8, number: -2, revealed: false },
    { id: 9, number: -3, revealed: false },
    { id: 10, number: -4, revealed: false },
    { id: 11, number: -5, revealed: false },
    { id: 12, number: -6, revealed: false },
    { id: 13, number: -7, revealed: false },
    { id: 14, number: -8, revealed: false },
    { id: 15, number: -9, revealed: false },
    { id: 16, number: -10, revealed: false },
    { id: 17, number: -7, revealed: false },
    { id: 18, number: -8, revealed: false },
    { id: 19, number: -9, revealed: false },
    { id: 20, number: -10, revealed: false },
    { id: 21, number: -11, revealed: false },
    { id: 22, number: -12, revealed: false },
    { id: 23, number: -11, revealed: false },
    { id: 24, number: -12, revealed: false }
  ];

  firstCard: any = null;
  secondCard: any = null;
  matches = 0;
  moves = 0;
  maxMoves = 25; 
  gameOver = false;
  gameResultMessage: string = '';

  constructor(private router: Router) {
    this.shuffleCards();
  }

  shuffleCards() {
    this.cards.sort(() => 0.5 - Math.random());
  }

  revealCard(card: any) {
    if (this.gameOver || card.revealed || this.secondCard) {
      return;
    }

    card.revealed = true;

    if (!this.firstCard) {
      this.firstCard = card;
    } else if (!this.secondCard) {
      this.secondCard = card;
      this.checkMatch();

      this.moves++;

      if (this.moves >= this.maxMoves) {
        this.gameOver = true;
        this.endGame(false);
      }
    }
  }

  checkMatch() {
    if (this.firstCard.number === this.secondCard.number) {
      this.matches++;
      this.resetSelection();

      if (this.matches === this.cards.length / 2) {
        this.endGame(true);
      }
    } else {
      setTimeout(() => {
        this.firstCard.revealed = false;
        this.secondCard.revealed = false;
        this.resetSelection();
      }, 1000);
    }
  }

  resetSelection() {
    this.firstCard = null;
    this.secondCard = null;
  }

  resetGame() {
    this.cards.forEach(card => (card.revealed = false));
    this.matches = 0;
    this.moves = 0;
    this.gameOver = false;
    this.gameResultMessage = '';
    this.shuffleCards();
  }

  endGame(won: boolean) {
    this.gameOver = true;
    this.gameResultMessage = won
      ? 'Parabéns! <br> Você encontrou todas as combinações!'
      : 'Jogo terminado! <br> Número máximo de jogadas alcançado.';
  }

  goBack(): void {
    this.router.navigate(['home-game/jogo-da-memoria/game-board-free/available-boards']);
  }

}
