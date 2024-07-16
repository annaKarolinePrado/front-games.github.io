import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showSignupForm(event: Event) {
    event.preventDefault();
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
    if (loginContainer && signupContainer) {
      loginContainer.style.display = 'none';
      signupContainer.style.display = 'block';
    }
  }

  showLoginForm(event: Event) {
    event.preventDefault();
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
    if (loginContainer && signupContainer) {
      loginContainer.style.display = 'block';
      signupContainer.style.display = 'none';
    }
  }
}
