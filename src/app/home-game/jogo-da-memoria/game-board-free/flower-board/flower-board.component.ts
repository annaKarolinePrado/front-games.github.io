import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-flower-board',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './flower-board.component.html',
  styleUrl: './flower-board.component.css'
})
export class FlowerBoardComponent implements OnInit {

  private readonly easyCards = [
    { id: 1, emoji: '🌱', revealed: false },
    { id: 2, emoji: '🌻', revealed: false },
    { id: 3, emoji: '🌱', revealed: false },
    { id: 4, emoji: '🌻', revealed: false },
    { id: 5, emoji: '🌺', revealed: false },
    { id: 6, emoji: '🌺', revealed: false },
    { id: 7, emoji: '🌵', revealed: false },
    { id: 8, emoji: '🌵', revealed: false },
    { id: 9, emoji: '🪷', revealed: false },
    { id: 10, emoji: '🪷', revealed: false },
    { id: 11, emoji: '🌹', revealed: false },
    { id: 12, emoji: '🌹', revealed: false },
    { id: 13, emoji: '🌼', revealed: false },
    { id: 14, emoji: '🌼', revealed: false },
    { id: 15, emoji: '💐', revealed: false },
    { id: 16, emoji: '💐', revealed: false }
  ];

  private readonly hardCards = [
    { id: 1, emoji: '🌸', revealed: false },
    { id: 2, emoji: '🌼', revealed: false }, 
    { id: 3, emoji: '🌻', revealed: false }, 
    { id: 4, emoji: '🌹', revealed: false }, 
    { id: 5, emoji: '🌺', revealed: false }, 
    { id: 6, emoji: '🌷', revealed: false }, 
    { id: 7, emoji: '🌸', revealed: false }, 
    { id: 8, emoji: '🌼', revealed: false }, 
    { id: 9, emoji: '🌻', revealed: false }, 
    { id: 10, emoji: '🌹', revealed: false }, 
    { id: 11, emoji: '🌺', revealed: false }, 
    { id: 12, emoji: '🌷', revealed: false },
    { id: 13, emoji: '💐', revealed: false }, 
    { id: 14, emoji: '🌵', revealed: false }, 
    { id: 15, emoji: '🌱', revealed: false }, 
    { id: 16, emoji: '🍁', revealed: false }, 
    { id: 17, emoji: '💐', revealed: false }, 
    { id: 18, emoji: '🌵', revealed: false }, 
    { id: 19, emoji: '🌱', revealed: false },
    { id: 20, emoji: '🍁', revealed: false }, 
    { id: 21, emoji: '🪷', revealed: false }, 
    { id: 22, emoji: '🍃', revealed: false },
    { id: 23, emoji: '🪷', revealed: false }, 
    { id: 24, emoji: '🍃', revealed: false }, 
    { id: 25, emoji: '🪻', revealed: false },
    { id: 26, emoji: '🌿', revealed: false }, 
    { id: 27, emoji: '🪻', revealed: false }, 
    { id: 28, emoji: '🌿', revealed: false }  
  ];

  cards: { id: number; emoji: string; revealed: boolean }[] = [];
  firstCard: any = null;
  secondCard: any = null;
  matches = 0;
  moves = 0;
  maxMoves = 30;
  gameOver = false;
  gameResultMessage: string = '';
  jogoCronometrado: boolean = false;
  tempoRestante: number = 0;
  cronometroIntervalo: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.shuffleCards();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const level = params['level'] || 'hard';
      this.cards = level === 'easy' ? this.easyCards : this.hardCards;
      this.maxMoves = level === 'easy' ? 18 : 30;
      this.shuffleCards();
      this.jogoCronometrado = params['cronometrado'] === 'true';

      if (this.jogoCronometrado) {
        this.iniciarCronometro();
      }
    });
  }

  iniciarCronometro() {
    this.tempoRestante = 130;
    this.cronometroIntervalo = setInterval(() => {
      this.tempoRestante--;
      if (this.tempoRestante <= 0) {
        clearInterval(this.cronometroIntervalo);
        this.gameOver = true;
        this.endGame(false);
      }
    }, 1000);
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

      if ((this.moves >= this.maxMoves) && (!this.jogoCronometrado)) {
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
    if (this.cronometroIntervalo) {
      clearInterval(this.cronometroIntervalo);
    }

    this.cards.forEach(card => (card.revealed = false));
    this.matches = 0;
    this.moves = 0;
    this.gameOver = false;
    this.gameResultMessage = '';
    this.shuffleCards();

    if (this.jogoCronometrado) {
      this.iniciarCronometro();
    }
  }

  endGame(won: boolean) {
    this.gameOver = true;

    if (this.cronometroIntervalo) {
      clearInterval(this.cronometroIntervalo);
    }
    
    const MENSAGEM_FIM_JOGO = this.jogoCronometrado 
      ? "Tempo esgotado." 
      : "Jogo terminado! <br> Número máximo de jogadas alcançado.";
    this.gameResultMessage = won
      ? 'Parabéns! <br> Você encontrou todas as combinações!'
      : MENSAGEM_FIM_JOGO;

      if (won) {
        this.launchConfetti();
      }
  }
  
  launchConfetti() {
    const duration = 3 * 1000; 
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
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
  }

  goBack(): void {
    this.router.navigate(['home-game/jogo-da-memoria']);
  }
}
