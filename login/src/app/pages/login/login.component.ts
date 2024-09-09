import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    username: 'user1', // senha test
    password: 'senha1' // senha test
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    const headers = { 'Content-Type': 'application/json' };
    this.http.post<any>('link back-end php', this.loginData, { headers })
      .subscribe(response => {
        console.log('Response:', response);
        if (response.status === 'success') {
          alert('Login efetuado com sucesso');
        } else {
          alert(response.message);
        }
      }, error => {
        console.error('Erro:', error);
        alert('Erro ao tentar fazer login. Tente novamente mais tarde.');
      });
  }

  }


