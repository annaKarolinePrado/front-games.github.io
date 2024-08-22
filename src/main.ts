import { GameBoardComponent } from './app/home-game/jogo-da-velha/game-board/game-board.component';
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
import { FlagBoardComponent } from './app/home-game/jogo-da-memoria/game-board-free/flag-board/flag-board.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'contato', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home-game', component: HomeGameComponent },
  { path: 'home-game/jogo-da-velha', component: JogoDaVelhaComponent },
  { path: 'home-game/jogo-da-velha/game-board', component: GameBoardComponent },
  { path: 'home-game/jogo-da-memoria', component: JogoDaMemoriaComponent },
  { path: 'home-game/jogo-da-memoria/game-board-free/fruit-board', component: FruitBoardComponent },
  { path: 'home-game/jogo-da-memoria/game-board-free/emojis-board', component: EmojisBoardComponent },
  { path: 'home-game/jogo-da-memoria/game-board-free/negative-number-board', component: NegativeNumberBoardComponent },
  { path: 'home-game/jogo-da-memoria/game-board-free/flag-board', component: FlagBoardComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
