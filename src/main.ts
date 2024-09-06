import { GameBoardLevelEasyComponent } from './app/home-game/jogo-da-velha/game-board/game-board-level-easy/game-board-level-easy.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { ContactComponent } from './app/contact/contact.component';
import { LoginComponent } from './app/login/login.component';
import { SignupComponent } from './app/signup/signup.component';
import { HomeGameComponent } from './app/home-game/home-game.component';
import { JogoDaMemoriaComponent } from './app/home-game/jogo-da-memoria/jogo-da-memoria.component';
import { JogoDaVelhaComponent } from './app/home-game/jogo-da-velha/jogo-da-velha.component';
import { EmojisBoardComponent } from './app/home-game/jogo-da-memoria/game-board-free/emojis-board/emojis-board.component';
import { FruitBoardComponent } from './app/home-game/jogo-da-memoria/game-board-free/fruit-board/fruit-board.component';
import { NegativeNumberBoardComponent } from './app/home-game/jogo-da-memoria/game-board-free/negative-number-board/negative-number-board.component';
import { HandBoardComponent } from './app/home-game/jogo-da-memoria/game-board-free/hand-board/hand-board.component';
import { FlowerBoardComponent } from './app/home-game/jogo-da-memoria/game-board-free/flower-board/flower-board.component';
import { AvailableBoardsComponent } from './app/home-game/jogo-da-memoria/game-board-free/available-boards/available-boards.component';
import { JogoDaForcaComponent } from './app/home-game/jogo-da-forca/jogo-da-forca.component';
import { SimpleWordsBoardComponent } from './app/home-game/jogo-da-forca/forca-board/simple-words-board/simple-words-board.component';
import { GameBoardLevelMediumComponent } from './app/home-game/jogo-da-velha/game-board/game-board-level-medium/game-board-level-medium.component';
import { TrafficSignsComponent } from './app/home-game/jogo-da-memoria/game-board-free/traffic-signs/traffic-signs.component';

const routes: Routes = [
  { path: '', component: HomeGameComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'contato', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },  
  { path: 'home-game/jogo-da-velha', component: JogoDaVelhaComponent },
  { path: 'home-game/jogo-da-velha/game-board/game-board-level-easy/game-board-level-easy.component', component: GameBoardLevelEasyComponent },
  { path: 'home-game/jogo-da-velha/game-board/game-board-level-medium/game-board-level-medium.component', component: GameBoardLevelMediumComponent },
  { path: 'home-game/jogo-da-memoria', component: JogoDaMemoriaComponent },
  { path: 'home-game/jogo-da-memoria/game-board-free/fruit-board', component: FruitBoardComponent },
  { path: 'home-game/jogo-da-memoria/game-board-free/emojis-board', component: EmojisBoardComponent },
  { path: 'home-game/jogo-da-memoria/game-board-free/negative-number-board', component: NegativeNumberBoardComponent },
  { path: 'home-game/jogo-da-memoria/game-board-free/hand-board', component: HandBoardComponent },
  { path: 'home-game/jogo-da-memoria/game-board-free/flower-board', component: FlowerBoardComponent },
  { path: 'home-game/jogo-da-memoria/game-board-free/traffic-signs', component: TrafficSignsComponent },
  { path: 'home-game/jogo-da-memoria/game-board-free/available-boards', component: AvailableBoardsComponent },
  { path: 'home-game/jogo-da-forca', component: JogoDaForcaComponent },
  { path: 'home-game/jogo-da-forca/forca-board/simple-words-board', component: SimpleWordsBoardComponent },
  
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
