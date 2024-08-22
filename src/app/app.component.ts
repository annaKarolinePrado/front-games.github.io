import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeGameComponent } from './home-game/home-game.component';
import { GameBoardComponent } from './home-game/jogo-da-velha/game-board/game-board.component';
import { JogoDaMemoriaComponent } from './home-game/jogo-da-memoria/jogo-da-memoria.component';
import { JogoDaVelhaComponent } from './home-game/jogo-da-velha/jogo-da-velha.component';
import { GameBoardFreeComponent } from './home-game/jogo-da-memoria/game-board-free/game-board-free.component';
import { Board44Component } from './home-game/jogo-da-memoria/game-board-free/board-4-4/board-4-4.component';

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
            JogoDaMemoriaComponent,
            GameBoardFreeComponent,
            Board44Component ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'games-front';
}
