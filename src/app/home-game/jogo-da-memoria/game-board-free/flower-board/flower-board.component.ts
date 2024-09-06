import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flower-board',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './flower-board.component.html',
  styleUrl: './flower-board.component.css'
})
export class FlowerBoardComponent {
  cards = [
    { id: 1, emoji: '🌸', revealed: false }, // Cherry Blossom
    { id: 2, emoji: '🌼', revealed: false }, // Blossom
    { id: 3, emoji: '🌻', revealed: false }, // Sunflower
    { id: 4, emoji: '🌹', revealed: false }, // Rose
    { id: 5, emoji: '🌺', revealed: false }, // Hibiscus
    { id: 6, emoji: '🌷', revealed: false }, // Tulip
    { id: 7, emoji: '🌸', revealed: false }, // Cherry Blossom
    { id: 8, emoji: '🌼', revealed: false }, // Blossom
    { id: 9, emoji: '🌻', revealed: false }, // Sunflower
    { id: 10, emoji: '🌹', revealed: false }, // Rose
    { id: 11, emoji: '🌺', revealed: false }, // Hibiscus
    { id: 12, emoji: '🌷', revealed: false }, // Tulip
    { id: 13, emoji: '💐', revealed: false }, // Bouquet
    { id: 14, emoji: '🌵', revealed: false }, // Cactus
    { id: 15, emoji: '🌱', revealed: false }, // Seedling
    { id: 16, emoji: '🍁', revealed: false }, // Maple Leaf
    { id: 17, emoji: '💐', revealed: false }, // Bouquet
    { id: 18, emoji: '🌵', revealed: false }, // Cactus
    { id: 19, emoji: '🌱', revealed: false }, // Seedling
    { id: 20, emoji: '🍁', revealed: false }, // Maple Leaf
    { id: 21, emoji: '🍂', revealed: false }, // Fallen Leaf
    { id: 22, emoji: '🍃', revealed: false }, // Leaf Fluttering in Wind
    { id: 23, emoji: '🍂', revealed: false }, // Fallen Leaf
    { id: 24, emoji: '🍃', revealed: false }, // Leaf Fluttering in Wind
    { id: 25, emoji: '🌾', revealed: false }, // Sheaf of Rice
    { id: 26, emoji: '🌿', revealed: false }, // Herb
    { id: 27, emoji: '🌾', revealed: false }, // Sheaf of Rice
    { id: 28, emoji: '🌿', revealed: false }  // Herb
  ];

  firstCard: any = null;
  secondCard: any = null;
  matches = 0;
  moves = 0;
  maxMoves = 30;
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
    if (this.firstCard.emoji === this.secondCard.emoji) {
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
