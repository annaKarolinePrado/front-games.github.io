import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-available-boards',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './available-boards.component.html',
  styleUrl: './available-boards.component.css'
})
export class AvailableBoardsComponent {
  constructor(private router: Router) {}

  showTipeGame = true;
  showLevelSelection = false;
  selectedTheme: string | null = null;

  // Função para selecionar o tema e exibir a tela de seleção de nível
  selectTheme(theme: string) {
    this.selectedTheme = theme;
    this.showTipeGame = false;
    this.showLevelSelection = true;
  }

  escolherNivelFacil() {
    if (this.selectedTheme) {
      this.router.navigate(['home-game/jogo-da-memoria/game-board-free', this.selectedTheme], { queryParams: { level: 'easy' } });
    }
  }

  // Função para escolher o nível difícil
  escolherNivelDificil() {
    if (this.selectedTheme) {
      this.router.navigate(['home-game/jogo-da-memoria/game-board-free', this.selectedTheme], { queryParams: { level: 'hard' } });
    }
  }

  // Função para voltar à seleção de tema
  gameTipo() {
    this.showTipeGame = true;
    this.showLevelSelection = false;
    this.selectedTheme = null;
  }

  // Funções para escolher o tema e ir para a tela de nível
  showGameBoardAnimals() { this.selectTheme('animals'); }
  showGameBoardEmojis() { this.selectTheme('emojis-board'); }
  showGameBoardFlower() { this.selectTheme('flower-board'); }
  showGameBoardFruit() { this.selectTheme('fruit-board'); }
  showGameBoardHand() { this.selectTheme('hand-board'); }
  showGameBoardNegativeNumber() { this.selectTheme('negative-number-board'); }
  showGameBoardSymbols() { this.selectTheme('symbols'); }
  showGameBoardTrafficSigns() { this.selectTheme('traffic-signs'); }

  goBack(): void {
    this.router.navigate(['']);
  }
}
