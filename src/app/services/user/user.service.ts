import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private existingNicknames = ['user1', 'user2', 'user3']; // Simulação de dados existentes

  isNicknameUnique(nickname: string): Observable<boolean> {
    const isUnique = !this.existingNicknames.includes(nickname);
    return of(isUnique); // Aqui você faria uma chamada HTTP real
  }
  constructor() { }
}
