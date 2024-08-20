import { LoginDTO } from './../models/login.dto';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, FormGroup, Validators, FormBuilder  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDTO } from '../models/user.dto';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  loginForm: FormGroup;
  showSignupForm: boolean = true;

 
  constructor(private fb: FormBuilder,  private http: HttpClient) {
    this.loginForm = this.createSignupForm();
  }
  private createSignupForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    const user: UserDTO = this.getUserFromForm();
    console.log(user)

   if (this.loginForm.valid) {
      const user: UserDTO = this.getUserFromForm();
      this.http.post<LoginDTO>('http://localhost:8080/login', user).subscribe((loginDTO: LoginDTO) => {
        console.log('Usuário cadastrado com sucesso', loginDTO);
        localStorage.setItem("token", loginDTO.token);
      }, error => {
        console.error('Erro ao cadastrar usuário', error);
      });
    }
  }

  private getUserFromForm(): UserDTO {
    return {
      email: this.loginForm.value.email,
      nickname: this.loginForm.value.nickname,
      password: this.loginForm.value.password
    };
  }

  showLoginForm(event: Event) {
    event.preventDefault();
    this.showSignupForm = false;
    // lógica para mostrar o formulário de login
  }
}