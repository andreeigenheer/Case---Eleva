import { Observable } from 'rxjs';
import { Escola } from '../models/escola.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class EscolaService {
  private relatorioCadastros: any[];

  //Aqui colocar o endereço a API, para ter as requisições da API
  private url = 'http://localhost:3000/cadastros';

  //A HttpClient é quem faz as requisições para a API Rest
  constructor(private httpClient: HttpClient) {
    this.relatorioCadastros = [];
  }

  get escola() {
    return this.relatorioCadastros;
  }

  //Requisição GET para o endereço da API. Ele retorna é um Observable de algo
  todas(): Observable<Escola[]>{
    return this.httpClient.get<Escola[]>(this.url);
  }

  adicionar(cadastro: any) {
    this.hidratar(cadastro);
     return this.httpClient.post<Escola>(this.url, cadastro);
  }

  private hidratar(cadastro: any) {
    cadastro.data = new Date();
  }
}
