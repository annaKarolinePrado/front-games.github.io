import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MenuComponent, RodapeComponent, LoginComponent, SignupComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'games-front';
}
