import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css'
})
export class GameBoardComponent {
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  currentPlayer: string = '';
  winner: string | null = null;
  player1: string = '';
  player2: string = '';
  gameStarted: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const state = navigation.extras.state as { player1: string; player2: string };
      this.player1 = state.player1;
      this.player2 = state.player2;
      this.currentPlayer = this.player1;
      this.gameStarted = true;
    } else {
      // Redirect if not started from JogoDaVelhaComponent
      this.router.navigate(['/']);
    }
  }

  makeMove(row: number, col: number): void {
    if (this.board[row][col] === '' && !this.winner) {
      this.board[row][col] = this.currentPlayer === this.player1 ? 'X' : 'O';
      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
      } else if (this.board.flat().every(cell => cell)) {
        this.winner = 'Empate';
      }
      this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
    }
  }

  checkWinner(): boolean {
    const lines = [
      [this.board[0][0], this.board[0][1], this.board[0][2]],
      [this.board[1][0], this.board[1][1], this.board[1][2]],
      [this.board[2][0], this.board[2][1], this.board[2][2]],
      [this.board[0][0], this.board[1][0], this.board[2][0]],
      [this.board[0][1], this.board[1][1], this.board[2][1]],
      [this.board[0][2], this.board[1][2], this.board[2][2]],
      [this.board[0][0], this.board[1][1], this.board[2][2]],
      [this.board[0][2], this.board[1][1], this.board[2][0]]
    ];
    return lines.some(line => line.every(cell => cell === 'X') || line.every(cell => cell === 'O'));
  }

  restartGame(): void {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = this.player1;
    this.winner = null;
    this.gameStarted = false;
  }
}
