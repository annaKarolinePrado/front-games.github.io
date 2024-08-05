import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogo-da-velha',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './jogo-da-velha.component.html',
  styleUrl: './jogo-da-velha.component.css'
})
export class JogoDaVelhaComponent {
  player1: string = '';
  player2: string = '';

  constructor(private router: Router) {    
  }

  startGame(): void {
    console.log(this.player1);
    console.log(this.player2)
    if (this.player1 && this.player2) {
      this.router.navigate(['/home-game/jogo-da-velha'], {
        state: { player1: this.player1, player2: this.player2 }
      });
    }
  }
}
