import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-board-free',
  standalone: true,
  imports: [],
  templateUrl: './game-board-free.component.html',
  styleUrl: './game-board-free.component.css'
})
export class GameBoardFreeComponent {

  constructor(private router: Router) {}

  showGame(): void {
    this.router.navigate(['home-game/jogo-da-memoria/game-board-free']);
  }

}
