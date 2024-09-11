import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleWordsBoardComponent } from './forca-board/simple-words-board/simple-words-board.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-jogo-da-forca',
    standalone: true,
    imports: [ SimpleWordsBoardComponent ],
    templateUrl: './jogo-da-forca.component.html',
    styleUrl: './jogo-da-forca.component.css'
})

export class JogoDaForcaComponent {
    constructor(private router: Router) {}
    
    showGameAleatorio(nivel: string) {
        this.router.navigate(['/home-game/jogo-da-forca/forca-board/simple-words-board'], { queryParams: { nivel: nivel } });
    }

    goBack(): void {
        this.router.navigate(['']);
    }
}
