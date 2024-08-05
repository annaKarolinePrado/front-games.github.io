import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-game',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home-game.component.html',
  styleUrl: './home-game.component.css'
})
export class HomeGameComponent {

}
