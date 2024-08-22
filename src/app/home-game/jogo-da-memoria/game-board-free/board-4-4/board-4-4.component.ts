import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-4-4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board-4-4.component.html',
  styleUrl: './board-4-4.component.css'
})
export class Board44Component {

  cards = [
    { id: 1, image: '😀', revealed: false },
    { id: 2, image: '😎', revealed: false },
    { id: 3, image: '😍', revealed: false },
    { id: 4, image: '🤩', revealed: false },
    { id: 5, image: '🤔', revealed: false },
    { id: 6, image: '😴', revealed: false },
    { id: 7, image: '😡', revealed: false },
    { id: 8, image: '😇', revealed: false },
    { id: 9, image: '😀', revealed: false },
    { id: 10, image: '😎', revealed: false },
    { id: 11, image: '😍', revealed: false },
    { id: 12, image: '🤩', revealed: false },
    { id: 13, image: '🤔', revealed: false },
    { id: 14, image: '😴', revealed: false },
    { id: 15, image: '😡', revealed: false },
    { id: 16, image: '😇', revealed: false }
  ];

  firstCard: any = null;
  secondCard: any = null;
  matches = 0;
  moves = 0;
  maxMoves = 16;
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
        setTimeout(() => {
          this.endGame(false);
        }, 100);
      }
    }
  }

  checkMatch() {
    if (this.firstCard.image === this.secondCard.image) {
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
    this.router.navigate(['home-game/jogo-da-memoria']);
  }
}
