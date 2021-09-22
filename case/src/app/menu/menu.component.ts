import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlterarComponent } from '../alterar/alterar.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}

  alterar() {
    console.log('Alterou');
    this.router.navigateByUrl('alterar');
  }

  remover() {
    console.log('Removeu');
    this.router.navigateByUrl('remover');
  }

  adicionar() {
    console.log('adicionou');
    this.router.navigateByUrl('novo-cadastro');
  }

  ngOnInit(): void {}
}
