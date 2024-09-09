import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-negative-number-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './negative-number-board.component.html',
  styleUrl: './negative-number-board.component.css'
})
export class NegativeNumberBoardComponent {

  

  cards = [
    { id: 1, image: '🌮', revealed: false },
    { id: 2, image: '🥪', revealed: false },
    { id: 3, image: '🥗', revealed: false },
    { id: 4, image: '🧀', revealed: false },
    { id: 5, image: '🍕', revealed: false },
    { id: 6, image: '🍜', revealed: false },
    { id: 7, image: '🎂', revealed: false },
    { id: 8, image: '🍨', revealed: false },
    { id: 9, image: '🌮', revealed: false },
    { id: 10, image: '🥪', revealed: false },
    { id: 11, image: '🥗', revealed: false },
    { id: 12, image: '🧀', revealed: false },
    { id: 13, image: '🍕', revealed: false },
    { id: 14, image: '🍜', revealed: false },
    { id: 15, image: '🎂', revealed: false },
    { id: 16, image: '🍨', revealed: false },
    { id: 17, image: '🍥', revealed: false },
    { id: 18, image: '🍔', revealed: false },
    { id: 19, image: '🌭', revealed: false },
    { id: 20, image: '🍻', revealed: false },
    { id: 21, image: '🍩', revealed: false },
    { id: 22, image: '🍣', revealed: false },
    { id: 23, image: '🍥', revealed: false },
    { id: 24, image: '🍔', revealed: false },
    { id: 25, image: '🌭', revealed: false },
    { id: 26, image: '🍻', revealed: false },
    { id: 27, image: '🍩', revealed: false },
    { id: 28, image: '🍣', revealed: false }
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
      if (won) {
        this.launchConfetti();
      }
  }

  launchConfetti() {
    const duration = 3 * 1000; // duração em milissegundos
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  
    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }
  
    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
  
      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }
  
      const particleCount = 200 * (timeLeft / duration);
      // lanca confetes de varias direções
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
  }
  goBack(): void {
    this.router.navigate(['home-game/jogo-da-memoria']);
  }
}