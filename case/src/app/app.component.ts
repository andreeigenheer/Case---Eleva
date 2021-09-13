import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';
import { CadastrosService } from './services/cadastros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'case';

  mostrarMenu: boolean = false;
constructor(private service: CadastrosService,
            private authService:AuthService){}

ngOnInit(){
  this.authService.mostrarMenuEmitter.subscribe(
    mostrar => this.mostrarMenu = mostrar
  );
}


  escola: string;
  turma: string;
}
