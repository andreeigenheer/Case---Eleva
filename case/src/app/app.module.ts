import { AuthService } from './login/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovoCadastroComponent } from './novo-cadastro/novo-cadastro.component';
import { FormsModule } from '@angular/forms';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';


registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NovoCadastroComponent,
    RelatorioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    {provide: LOCALE_ID, useValue:'pt'},
    AuthService,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
