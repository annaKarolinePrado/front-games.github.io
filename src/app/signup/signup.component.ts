import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, FormGroup, Validators, FormBuilder, AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDTO } from '../models/user.dto';
import { RouterModule } from '@angular/router';
import { catchError, debounceTime, map, Observable, of, switchMap } from 'rxjs';
import { UserService } from '../services/user/user.service';

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
  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private fb: FormBuilder, private http: HttpClient, private userService: UserService) {
    this.signupForm = this.createSignupForm();
  }

  private createSignupForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nickname: ['', [Validators.required], [this.uniqueNicknameValidator(this.userService)]],
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
      this.http.post(this.baseUrl, user).subscribe(response => {
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
      nickname: this.signupForm.value.nickname,
      password: this.signupForm.value.password
    };
  }

  showLoginForm(event: Event) {
    event.preventDefault();
    this.showSignupForm = false;
  }

  checkNickname(nickname: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/check-nickname`, { params: { nickname } });
  }

  private uniqueNicknameValidator(userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return control.valueChanges.pipe(
        debounceTime(300),
        switchMap(value => userService.checkNickname(value)),
        map(isTaken => (isTaken ? { nonUniqueNickname: true } : null)),
        catchError(() => of(null)) // Trate possíveis erros de requisição
      );
    };
  }
}
