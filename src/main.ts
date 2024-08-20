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
import { JogoDaVelhaComponent } from './app/home-game/jogo-da-velha/jogo-da-velha.component';
import { JogoDaMemoriaComponent } from './app/home-game/jogo-da-memoria/jogo-da-memoria.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'contato', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home-game', component: HomeGameComponent },
  { path: 'home-game/jogo-da-velha', component: JogoDaVelhaComponent },
  { path: 'home-game/jogo-da-velha/game-board', component: GameBoardComponent },
  { path: 'home-game/jogo-da-memoria', component: JogoDaMemoriaComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
