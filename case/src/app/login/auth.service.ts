import { Usuario } from './usuario';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'eunaeleva@eleva.com.br' && usuario.senha === '201068') {
      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['../novo-cadastro'])
    } else {
      alert("Usuário ou senha não cadastrado")
      this.usuarioAutenticado = false;

      this.mostrarMenuEmitter.emit(false);

    }
  }
}
