import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogo-da-velha',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent {
  player1: string = '';
  player2: string = '';
  player1Error: string = '';
  player2Error: string = '';

  constructor(private router: Router) {}

  showOptionsGame = true;
  showLevelGame = false;
  showConometroGame = false;
  showNameGame = false;
  showNameGameEasy =false;
  showNameGameAverage =false;
  showNameGameHard =false;

  homeOptionGame() {
    this.showOptionsGame = true; 
    this.showLevelGame = false; 
    this.showConometroGame = false;
    this.showNameGame = false;
  }

  homeLevelGame() {
    this.showOptionsGame = false; 
    this.showLevelGame = true; 
    this.showConometroGame = false;
    this.showNameGame = false;
  }

  homeConometroGame() {
    this.showOptionsGame = false; 
    this.showLevelGame = false; 
    this.showConometroGame = true;
    this.showNameGame = false;
  }

  homeNameGameEasy() {
    this.showOptionsGame = false; 
    this.showLevelGame = false; 
    this.showConometroGame = false;
    this.showNameGame = false;
    this.showNameGameEasy = true;
    this.showNameGameAverage = false;
    this.showNameGameHard = false;
  }

  homeNameGameAverage() {
    this.showOptionsGame = false; 
    this.showLevelGame = false; 
    this.showConometroGame = false;
    this.showNameGame = false;
    this.showNameGameEasy = false;
    this.showNameGameAverage = true;
    this.showNameGameHard = false;
  }

  homeNameGameHard() {
    this.showOptionsGame = false; 
    this.showLevelGame = false; 
    this.showConometroGame = false;
    this.showNameGame = false;
    this.showNameGameEasy = false;
    this.showNameGameAverage = false;
    this.showNameGameHard = true;
  }

  backToOption() {
    this.showOptionsGame = true; 
    this.showLevelGame = false; 
    this.showConometroGame = false;
    this.showNameGame = false;
  }


  startGameEasy(): void {
    this.player1Error = '';
    this.player2Error = '';

    if (!this.player1) {
      this.player1Error = 'Nome do Jogador 1 é obrigatório';
    }
    if (!this.player2) {
      this.player2Error = 'Nome do Jogador 2 é obrigatório';
    }

    if (this.player1 && this.player2) {
      this.router.navigate(['home-game/jogo-da-velha/game-board/game-board-level-easy/game-board-level-easy.component'], {
        state: { player1: this.player1, player2: this.player2 }
      });
    }
  }

  startGameAverage(): void {
    this.player1Error = '';
    this.player2Error = '';

    if (!this.player1) {
      this.player1Error = 'Nome do Jogador 1 é obrigatório';
    }
    if (!this.player2) {
      this.player2Error = 'Nome do Jogador 2 é obrigatório';
    }

    if (this.player1 && this.player2) {
      this.router.navigate(['home-game/jogo-da-velha/game-board/game-board-level-medium/game-board-level-medium.component'], {
        state: { player1: this.player1, player2: this.player2 }
      });
    }
  }

  startGameHard(): void {
    this.player1Error = '';
    this.player2Error = '';

    if (!this.player1) {
      this.player1Error = 'Nome do Jogador 1 é obrigatório';
    }
    if (!this.player2) {
      this.player2Error = 'Nome do Jogador 2 é obrigatório';
    }

    if (this.player1 && this.player2) {
      this.router.navigate(['home-game/jogo-da-velha/game-board'], {
        state: { player1: this.player1, player2: this.player2 }
      });
    }
  }
  goLevel(route: string) {
    this.router.navigate([route]);
  }

  goBack(): void {
    this.router.navigate(['']);
  }
}
