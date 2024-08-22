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
import { EmojisBoardComponent } from './home-game/jogo-da-memoria/game-board-free/emojis-board/emojis-board.component';
import { FruitBoardComponent } from './home-game/jogo-da-memoria/game-board-free/fruit-board/fruit-board.component';
import { NegativeNumberBoardComponent } from './home-game/jogo-da-memoria/game-board-free/negative-number-board/negative-number-board.component';
import { HandBoardComponent } from './home-game/jogo-da-memoria/game-board-free/hand-board/hand-board.component';
import { FlowerBoardComponent } from './home-game/jogo-da-memoria/game-board-free/flower-board/flower-board.component';
import { AvailableBoardsComponent } from './home-game/jogo-da-memoria/game-board-free/available-boards/available-boards.component';

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
            FruitBoardComponent,
            EmojisBoardComponent,
            NegativeNumberBoardComponent,
            HandBoardComponent,
            FlowerBoardComponent,
            AvailableBoardsComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'games-front';
}
