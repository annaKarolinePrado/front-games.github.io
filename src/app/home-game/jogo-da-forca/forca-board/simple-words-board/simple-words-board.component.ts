import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simple-words-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-words-board.component.html',
  styleUrl: './simple-words-board.component.css'
})
export class SimpleWordsBoardComponent {

  constructor(private router: Router) {}

  palavraSecreta: string = '';
  letrasErradas: string[] = [];
  letrasCorretas: string[] = [];
  vidasRestantes: number = 4;
  jogoIniciado: boolean = false;
  jogoTerminado: boolean = false;
  venceu: boolean = false;

  ngOnInit() {
    this.iniciarJogo();  // Inicia o jogo automaticamente ao carregar o componente
  }

  iniciarJogo() {
    this.jogoIniciado = true;
    this.jogoTerminado = false;
    this.venceu = false;
    this.letrasErradas = [];
    this.letrasCorretas = [];
    this.vidasRestantes = 4;
    this.palavraSecreta = this.sortearPalavra();
  }

  sortearPalavra(): string {
    const palavras = ['CASA', 'CARRO', 'MESA', 'LIVRO', 'ESCOLA', 'PORTA', 'JANELA', 'RUA', 'ÁRVORE', 'CAMA',
                      'BOLA', 'PATO', 'NAVIO', 'CADERNO', 'CHUVA', 'SOL', 'VENTO', 'TIGRE', 'RATO', 'FRUTA',
                      'AVIAO', 'CEU', 'FLORES', 'RODA', 'CANETA', 'MONTANHA', 'LAGO', 'COPO', 'CHAVE', 'CACHO'];
    return palavras[Math.floor(Math.random() * palavras.length)].toUpperCase();
  }

  verificarLetra(letra: string) {
    letra = letra.toUpperCase();
    if (this.palavraSecreta.includes(letra)) {
      if (!this.letrasCorretas.includes(letra)) {
        this.letrasCorretas.push(letra);
      }
    } else {
      if (!this.letrasErradas.includes(letra)) {
        this.letrasErradas.push(letra);
        this.vidasRestantes--;
      }
    }
    this.verificarFimDeJogo();
  }

  verificarFimDeJogo() {
    if (this.palavraOculta === this.palavraSecreta) {
      this.venceu = true;
      this.jogoTerminado = true;
    } else if (this.vidasRestantes <= 0) {
      this.jogoTerminado = true;
    }
  }

  get palavraOculta(): string {
    return this.palavraSecreta.split('').map(letra => this.letrasCorretas.includes(letra) ? letra : '_').join(' ');
  }

  goBack(): void {
    this.router.navigate(['']);
  }
}
