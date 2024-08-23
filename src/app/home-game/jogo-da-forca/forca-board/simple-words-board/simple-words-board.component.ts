import {
  CommonModule
} from '@angular/common';
import {
  Component
} from '@angular/core';
import {
  Router
} from '@angular/router';
import confetti from 'canvas-confetti';

interface Temas {
  [key: string]: string[];
}

const temas: Temas = {
  'Mix': ['CASA', 'CARRO', 'MESA', 'LIVRO', 'ESCOLA', 'PORTA', 'JANELA', 'RUA', 'ÁRVORE', 'CAMA', 'QUARTO', 'COZINHA', 'BANHEIRO', 'SOFÁ', 'ESCRITÓRIO', 'TELEVISÃO', 'LAMPADA', 'PRATO', 'TALHER', 'JANELA'],
  'Animais': ['CACHORRO', 'ELEFANTE', 'GIRAFA', 'BORBOLETA', 'LEOPARDO', 'TIGRE', 'BALEIA', 'PINGUIM', 'JACARÉ', 'PAPAGAIO', 'GATO', 'CAVALO', 'COELHO', 'TARTARUGA', 'URSO', 'ONÇA', 'VEADO', 'RAPOSA', 'MACACO', 'MORCEGO'],
  'Frutas': ['ABACAXI', 'MORANGO', 'BANANA', 'LARANJA', 'UVA', 'MELANCIA', 'ABACATE', 'LIMÃO', 'COCO', 'AMEIXA', 'MANGA', 'PÊRA', 'MAÇÃ', 'KIWI', 'FIGO', 'CAJU', 'TANGERINA', 'FRAMBOESA', 'CABELUDA', 'PAPAYA'],
  'Cores': ['AMARELO', 'VERMELHO', 'AZUL', 'VERDE', 'ROXO', 'LARANJA', 'CINZA', 'BRANCO', 'PRETO', 'ROSA', 'BEGE', 'MARROM', 'VIOLETA', 'TURQUESA', 'PRATA', 'DOURADO', 'CREME', 'AZUL CLARO', 'VERDE ESCURO', 'LILÁS'],
  'Países': ['BRASIL', 'CANADÁ', 'ITÁLIA', 'ALEMANHA', 'JAPÃO', 'FRANÇA', 'ARGENTINA', 'AUSTRÁLIA', 'MÉXICO', 'PORTUGAL', 'ÍNDIA', 'EGITO', 'ESPANHA', 'SUIÇA', 'SUÉCIA', 'NORUEGA', 'ÁFRICA DO SUL', 'COREIA DO SUL', 'TAIWAN', 'COLÔMBIA'],
  'Tecnologia': ['COMPUTADOR', 'SMARTPHONE', 'INTERNET', 'SOFTWARE', 'ROBÔ', 'SATÉLITE', 'DRONE', 'TECLADO', 'MONITOR', 'IMPRESSORA', 'CÂMERA', 'ROTEADOR', 'MEMÓRIA', 'DISCO RÍGIDO', 'TABLET', 'FONE DE OUVIDO', 'PROJETOR', 'USB', 'GPS', 'BATERIA'],
  'Profissões': ['ENGENHEIRO', 'PROFESSOR', 'ADVOGADO', 'MÉDICO', 'DESIGNER', 'BOMBEIRO', 'FARMACÊUTICO', 'ARQUITETO', 'JORNALISTA', 'ELETRICISTA', 'ENFERMEIRO', 'CENÓGRAFO', 'MOTORISTA', 'QUÍMICO', 'GEÓLOGO', 'ATENDENTE', 'PUBLICITÁRIO', 'PSICÓLOGO', 'ARTE EDUCADOR', 'CHEFE DE COZINHA'],
  'Filmes': ['TITANIC', 'AVATAR', 'MATRIX', 'INCEPTION', 'GLADIADOR', 'JURASSIC PARK', 'HARRY POTTER', 'STAR WARS', 'O EXTERMINADOR', 'FROZEN', 'O SENHOR DOS ANÉIS', 'PIRATAS DO CARIBE', 'O REI LEÃO', 'FORREST GUMP', 'O PODEROSO CHEFÃO', 'O EXORCISTA', 'O SILÊNCIO DOS INOCENTES', 'VINGADORES', 'CIDADE DE DEUS', 'AMÉLIE POULAIN'],
  'Desafiador': ['HIPOPÓTAMO', 'ORNITORRINCO', 'QUIXOTESCO', 'SOTURNO', 'ZIGUEZAGUE', 'PSICÓLOGO', 'XILOFONE', 'HORIZONTE', 'PARADOXO', 'ULTIMATO', 'PNEUMOULTRAMICROSCOPICOSSILICOVULCANOCONIOSE', 'MELANCÓLICO', 'HELICÓPTERO', 'TRANSILVÂNIA', 'CALCIMETRICO', 'ANTÍLOPE', 'VERBOSIDADE', 'PRAGMATISMO', 'HIPERBÓREO', 'XANTOFILA'],
  'Esportes': ['FUTEBOL', 'BASQUETE', 'TÊNIS', 'NATAÇÃO', 'ATLETISMO', 'BOXE', 'VÔLEI', 'HANDEBOL', 'SURF', 'GOLFE', 'RUGBY', 'CANOAGEM', 'SKATE', 'ESCALADA', 'FUTSAL', 'PINGUE-PONGUE', 'JUDO', 'LUTAS', 'ARCO E FLECHA', 'ESQUI'],
  'Música': ['ROCK', 'POP', 'JAZZ', 'CLÁSSICA', 'HIP HOP', 'BLUES', 'REGGAE', 'SERTANEJO', 'MPB', 'FOLK', 'SOUL', 'GOSPEL', 'TECHNO', 'HOUSE', 'DANCE', 'TRANCE', 'LATINO', 'FUNK', 'DISCO', 'INDIE'],
  'História': ['IMPÉRIO', 'REVOLUÇÃO', 'DINASTIA', 'GUERRA', 'CONQUISTA', 'CIVILIZAÇÃO', 'COLONIZAÇÃO', 'REPÚBLICA', 'MONARQUIA', 'ALDEIA', 'ALIANÇA', 'FEUDALISMO', 'REFORMA', 'RENASCIMENTO', 'GUERRAS NAPOLEÔNICAS', 'ESTADO', 'INDEPENDÊNCIA', 'COLÔNIA', 'METRÓPOLE', 'TRIBUTOS'],
  'Natureza': ['MONTANHA', 'OCEANO', 'FLOR', 'RIO', 'CACHOEIRA', 'DESERTO', 'JUNGLE', 'LAGO', 'VALE', 'FLOR', 'ILHA', 'CAVERNA', 'PANTANAL', 'MARGENS', 'BAÍA', 'RAVINA', 'FLAMINGO', 'CORAL', 'ARRECIFE', 'PRAIA'],
  'Literatura': ['ROMANCE', 'POESIA', 'DRAMA', 'FICÇÃO', 'NOVELA', 'BIOGRAFIA', 'ESSAY', 'CONTOS', 'ENSAIO', 'TRAGÉDIA', 'COMÉDIA', 'LIVRO', 'MEMÓRIA', 'HISTÓRIA', 'MITOLOGIA', 'FÁBULAS', 'ESTUDOS', 'ROMANCE POLICIAL', 'HISTÓRIA EM QUADRINHOS', 'AUTOBIOGRAFIA'],
  'Culinária': ['PIZZA', 'PASTA', 'SUSHI', 'BURGER', 'TACOS', 'RISOTO', 'LASANHA', 'TARTAR', 'FRANGO', 'SALADA', 'SOPA', 'QUICHE', 'EMPANADA', 'BURGUER', 'CARNE', 'FEIJÃO', 'CACHORRO QUENTE', 'CROISSANT', 'PASTEL', 'TORTA'],
  'Mitologia': ['ZEUS', 'HADES', 'POSEIDON', 'APOLO', 'ATENA', 'ARES', 'ARTEMIS', 'AFRODITA', 'HERMES', 'DEMETER', 'HEFESTO', 'PERSEFONE', 'DIONÍSIO', 'HÉRCULES', 'TÍFON', 'NÉPHTIS', 'HEBE', 'NIX', 'EROS', 'CIRCE'],
  'Ciência': ['FÍSICA', 'QUÍMICA', 'BIOLOGIA', 'ASTRONOMIA', 'ECOLOGIA', 'GENÉTICA', 'METALURGIA', 'MATEMÁTICA', 'NEUROCIÊNCIA', 'BOTÂNICA', 'PALEONTOLOGIA', 'FISIOLOGIA', 'METEOROLOGIA', 'ANTROPOLOGIA', 'ZOOLOGIA', 'ASTROFÍSICA', 'CITOLOGIA', 'TEORIAS', 'ESPAÇO', 'FENÔMENOS'],
  'Arquitetura': ['PIRÂMIDE', 'CATEDRAL', 'MUSEU', 'PALÁCIO', 'ARRAIAL', 'FORTALEZA', 'TEMPLO', 'TORRE', 'FAROL', 'ANFITEATRO', 'IGREJA', 'AUDITÓRIO', 'ESTÁDIO', 'MONUMENTO', 'ESCOLA', 'BIBLIOTECA', 'MERCADO', 'BARRACÃO', 'MANSÃO', 'COBERTURA'],
  'Viagens': ['PARIS', 'LONDRES', 'NOVA IORQUE', 'TOKYO', 'ROMA', 'MADRI', 'BEIJING', 'DUBAI', 'SYDNEY', 'CIDADE DO CABO', 'BARCELONA', 'AMSTERDÃ', 'LOS ANGELES', 'MONTREAL', 'VENEZA', 'ISTAMBUL', 'SANTIAGO', 'MELBOURNE', 'NICE', 'BUENOS AIRES'],
  'Festival': ['CARNAVAL', 'FESTIVAL DE CINEMA', 'LOLLAPALOOZA', 'ROCK IN RIO', 'FESTA JUNINA', 'OKTOBERFEST', 'COACHELLA', 'FESTIVAL DE JAZZ', 'FESTIVAL DE MÚSICA', 'FESTIVAL DE DANÇA', 'FESTIVAL DE CERVEJA', 'FESTIVAL DE COMÉDIA', 'FESTIVAL DE LITERATURA', 'FESTIVAL DE ARTE', 'FESTIVAL DE FOLK', 'FESTIVAL DE ANIMAÇÃO', 'FESTIVAL DE TEATRO', 'FESTIVAL DE CERVEJA ARTESANAL', 'FESTIVAL DE DANÇA URBANA', 'FESTIVAL DE FOOD TRUCKS']
};


@Component({
  selector: 'app-simple-words-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-words-board.component.html',
  styleUrl: './simple-words-board.component.css'
})
export class SimpleWordsBoardComponent {

  temaSelecionado: string = '';
  palavraSecreta: string = '';
  letrasErradas: string[] = [];
  letrasCorretas: string[] = [];
  vidasRestantes: number = 9;
  jogoIniciado: boolean = false;
  jogoTerminado: boolean = false;
  venceu: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.iniciarJogo(); // Inicia o jogo automaticamente ao carregar o componente
  }

  iniciarJogo() {
    this.temaSelecionado = this.sortearTema();
    this.palavraSecreta = this.sortearPalavra(this.temaSelecionado);
    this.jogoIniciado = true;
    this.jogoTerminado = false;
    this.venceu = false;
    this.letrasErradas = [];
    this.letrasCorretas = [];
    this.vidasRestantes = 9;
  }

  sortearTema(): string {
    const temasDisponiveis = Object.keys(temas);
    return temasDisponiveis[Math.floor(Math.random() * temasDisponiveis.length)];
  }

  sortearPalavra(tema: string): string {
    const palavras = temas[tema];
    return palavras[Math.floor(Math.random() * palavras.length)];
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
    console.log(this.palavraSecreta)
    if (this.removerEspacos(this.palavraOculta) === this.palavraSecreta) {
      this.venceu = true;
      this.jogoTerminado = true;
      this.confettiColorido();

    } else if (this.vidasRestantes <= 0) {
      this.jogoTerminado = true;
      this.confettiEscuro();
    }
  }

  get palavraOculta(): string {
    return this.palavraSecreta.split('').map(letra => this.letrasCorretas.includes(letra) ? letra : '_').join(' ');
  }

  confettiColorido() {
    confetti({
      particleCount: 200,
      spread: 180,
      origin: {
        y: 0.5
      },
      colors: ['#000000', '#333333', '#666666', '#999999', '#4B4B4B', '#1C1C1C']
    });
  }

  confettiEscuro() {
    confetti({
      particleCount: 200,
      spread: 180,
      origin: {
        y: 0.5
      },
      colors: ['#000000', '#333333', '#666666', '#999999', '#4B4B4B', '#1C1C1C']
    });
  }



  goBack(): void {
    this.router.navigate(['']);
  }

  removerEspacos(palavraOculta: string): string {
    return palavraOculta.replace(/\s+/g, '');
  }
}


/* Confete caindo de cima da tela
    chuva() {
    confetti({
      particleCount: 100,
      spread: 30,
      angle: 90,
      origin: { y: 0 }
    });
  }
  tempestade() {
    confetti({
      particleCount: 200,
      spread: 180,
      origin: { y: 0 },
      colors: ['#0000FF', '#0000FF', '#00FFFF', '#00FFFF']
    });
  }
*/
