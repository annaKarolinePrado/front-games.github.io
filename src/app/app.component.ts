import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnimalsComponent } from './home-game/jogo-da-memoria/game-board-free/animals/animals.component';
import { AvailableBoardsComponent } from './home-game/jogo-da-memoria/game-board-free/available-boards/available-boards.component';
import { EmojisBoardComponent } from './home-game/jogo-da-memoria/game-board-free/emojis-board/emojis-board.component';
import { FlowerBoardComponent } from './home-game/jogo-da-memoria/game-board-free/flower-board/flower-board.component';
import { FruitBoardComponent } from './home-game/jogo-da-memoria/game-board-free/fruit-board/fruit-board.component';
import { HandBoardComponent } from './home-game/jogo-da-memoria/game-board-free/hand-board/hand-board.component';
import { NegativeNumberBoardComponent } from './home-game/jogo-da-memoria/game-board-free/negative-number-board/negative-number-board.component';
import { SymbolsComponent } from './home-game/jogo-da-memoria/game-board-free/symbols/symbols.component';
import { TrafficSignsComponent } from './home-game/jogo-da-memoria/game-board-free/traffic-signs/traffic-signs.component';
import { GameBoardLevelEasyComponent } from './home-game/jogo-da-velha/game-board/game-board-level-easy/game-board-level-easy.component';
import { GameBoardLevelMediumComponent } from './home-game/jogo-da-velha/game-board/game-board-level-medium/game-board-level-medium.component';
import { JogoDaVelhaComponent } from './home-game/jogo-da-velha/jogo-da-velha.component';
import { JogoDaForcaComponent } from './home-game/jogo-da-forca/jogo-da-forca.component';
import { SimpleWordsBoardComponent } from './home-game/jogo-da-forca/forca-board/simple-words-board/simple-words-board.component';
import { JogoDaMemoriaComponent } from './home-game/jogo-da-memoria/jogo-da-memoria.component';
import { HomeGameComponent } from './home-game/home-game.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SignupComponent } from './signup/signup.component';
import { GameBoardTimedComponent } from './home-game/jogo-da-velha/game-board/game-board-timed/game-board-timed.component';

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
            GameBoardTimedComponent,
            GameBoardLevelEasyComponent,
            GameBoardLevelMediumComponent,
            JogoDaMemoriaComponent,
            AvailableBoardsComponent,
            FruitBoardComponent,
            EmojisBoardComponent,
            NegativeNumberBoardComponent,
            HandBoardComponent,
            FlowerBoardComponent,
            TrafficSignsComponent,
            AnimalsComponent,
            SymbolsComponent,
            JogoDaForcaComponent,
            SimpleWordsBoardComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'games-front';
}
