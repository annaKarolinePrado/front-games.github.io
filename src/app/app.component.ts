import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeGameComponent } from './home-game/home-game.component';
import { JogoDaVelhaComponent } from './home-game/jogo-da-velha/jogo-da-velha.component';
import { GameBoardComponent } from './home-game/jogo-da-velha/game-board/game-board.component';
import { JogoDaMemoriaComponent } from './home-game/jogo-da-memoria/jogo-da-memoria.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, 
            MenuComponent, 
            RodapeComponent, 
            LoginComponent, 
            SignupComponent, 
            HomeGameComponent, 
            JogoDaVelhaComponent,
            GameBoardComponent,
            JogoDaMemoriaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'games-front';
}
