import { LoginComponent } from './login/login.component';
import { NovoCadastroComponent } from './novo-cadastro/novo-cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelatorioComponent } from './relatorio/relatorio.component';

const routes: Routes = [
  {path: '',redirectTo: 'login', pathMatch:'full'},
  {path:'relatorio', component:RelatorioComponent },
  {path:'novo-cadastro', component:NovoCadastroComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
