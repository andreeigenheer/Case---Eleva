import { LoginComponent } from './login/login.component';
import { NovoCadastroComponent } from './novo-cadastro/novo-cadastro.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { MenuComponent } from './menu/menu.component';
import { RemoverComponent } from './remover/remover.component';
import { AlterarComponent } from './alterar/alterar.component';


const routes: Routes = [
  {path: '',redirectTo: 'login', pathMatch:'full'},
  {path:'relatorio', component:RelatorioComponent },
  {path:'novo-cadastro', component:NovoCadastroComponent},
  {path:'login', component:LoginComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'alterar', component:AlterarComponent},
  {path: 'remover', component:RemoverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
