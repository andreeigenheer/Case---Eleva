import { Observable } from 'rxjs';
import { Cadastro } from './../models/cadastros.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class CadastrosService {
  private relatorioCadastros: any[];

  //Aqui colocar o endereço a API, para ter as requisições da API
  private url = 'http://localhost:3000/cadastros';

  constructor(private httpClient: HttpClient) {
    this.relatorioCadastros = [];
  }

  get cadastros() {
    return this.relatorioCadastros;
  }

  //Requisição GET para o endereço da API. Ele retorna é um Observable de algo
  todas(){
    return this.httpClient.get<Cadastro[]>(this.url);
  }

  adicionar(cadastro: any) {
    this.hidratar(cadastro);
     return this.httpClient.post<Cadastro>(this.url, cadastro);
  }

  private hidratar(cadastro: any) {
    cadastro.data = new Date();
  }
}
