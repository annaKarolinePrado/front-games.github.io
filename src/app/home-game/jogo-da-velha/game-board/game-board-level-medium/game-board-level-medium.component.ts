import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-game-board-level-medium',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-board-level-medium.component.html',
  styleUrl: './game-board-level-medium.component.css'
})
export class GameBoardLevelMediumComponent {
  player1: string = '';
  player2: string = '';
  currentPlayer: string = '';
  board: string[][] = [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']];
  gameOver: boolean = false;
  winner: string = '';

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state) {
      this.player1 = state['player1'];
      this.player2 = state['player2'];
      this.currentPlayer = this.player1;
    }
  }

  makeMove(i: number, j: number): void {
    if (!this.board[i][j] && !this.gameOver) {
      this.board[i][j] = this.currentPlayer === this.player1 ? 'X' : 'O';
      this.checkWinner();
      this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
    }
  }

  checkWinner(): void {
    const winningCombinations = [
      [[0, 0], [0, 1], [0, 2]], [[0, 1], [0, 2], [0, 3]],
      [[1, 0], [1, 1], [1, 2]], [[1, 1], [1, 2], [1, 3]],
      [[2, 0], [2, 1], [2, 2]], [[2, 1], [2, 2], [2, 3]],
      [[3, 0], [3, 1], [3, 2]], [[3, 1], [3, 2], [3, 3]],

      [[0, 0], [1, 0], [2, 0]], [[1, 0], [2, 0], [3, 0]],
      [[0, 1], [1, 1], [2, 1]], [[1, 1], [2, 1], [3, 1]],
      [[0, 2], [1, 2], [2, 2]], [[1, 2], [2, 2], [3, 2]],
      [[0, 3], [1, 3], [2, 3]], [[1, 3], [2, 3], [3, 3]],

      [[0, 0], [1, 1], [2, 2]], [[1, 1], [2, 2], [3, 3]],
      [[0, 1], [1, 2], [2, 3]], [[1, 0], [2, 1], [3, 2]],

      [[0, 2], [1, 1], [2, 0]], [[0, 3], [1, 2], [2, 1]],
      [[1, 3], [2, 2], [3, 1]], [[1, 2], [2, 1], [3, 0]],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (this.board[a[0]][a[1]] && 
        this.board[a[0]][a[1]] === this.board[b[0]][b[1]] && 
        this.board[a[0]][a[1]] === this.board[c[0]][c[1]]) {

        this.winner = this.currentPlayer;
        this.gameOver = true;
        this.confettiColorido();
        return;
      }
    }

    if (this.board.flat().every(cell => cell)) {
      this.winner = 'Empate';
      this.gameOver = true;
    }
  }

  resetBoard(): void {
    this.board = [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']];
    this.currentPlayer = this.player1;
    this.gameOver = false;
    this.winner = '';
  }

  confettiColorido() {
    confetti({
      particleCount: 600,
      spread: 80,
      origin: {
        y: 0.5
      },
      colors: ['#ff00bf', '#8000ff', '#0000ff', '#00ffff', '#00ffbf', '#00ff00', '#ffff00', '#ff8000']
    });
  }

  goLevel(route: string) {
    this.router.navigate([route]);
  }

  goBack(): void {
    this.router.navigate(['']);
  }
}

