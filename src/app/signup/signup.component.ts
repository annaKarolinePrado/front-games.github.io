import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, FormGroup, Validators, FormBuilder  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDTO } from '../models/user.dto';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
 
  signupForm: FormGroup;
  showSignupForm: boolean = true;
  successMessage: string | null = null;
 
  constructor(private fb: FormBuilder,  private http: HttpClient) {
    this.signupForm = this.createSignupForm();
  }
  private createSignupForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordsMatchValidator });
  }

  private passwordsMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return password && confirmPassword && password.value === confirmPassword.value
      ? null : { mismatch: true };
  }

  onSubmit() {
   if (this.signupForm.valid) {
      const user: UserDTO = this.getUserFromForm();
      this.http.post('http://localhost:8080/api/users', user).subscribe(response => {
        console.log('Usuário cadastrado com sucesso', response);
        this.signupForm.reset();  
        this.successMessage = 'Usuário cadastrado com sucesso!'; 
      }, error => {
        console.error('Erro ao cadastrar usuário', error);
      });
    }
  }

  private getUserFromForm(): UserDTO {
    return {
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    };
  }

  showLoginForm(event: Event) {
    event.preventDefault();
    this.showSignupForm = false;
    // lógica para mostrar o formulário de login
  }
}