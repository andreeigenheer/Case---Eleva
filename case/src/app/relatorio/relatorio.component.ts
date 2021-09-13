import { Cadastro } from './../models/cadastros.model';
import { Component, Input, OnInit } from '@angular/core';
import { CadastrosService } from '../services/cadastros.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss'],
})
export class RelatorioComponent implements OnInit {
  cadastros: any[];

  constructor(private service: CadastrosService) {}

  ngOnInit(): void {
    this.service.todas().subscribe((cadastros: Cadastro[]) => {
      console.table(cadastros);
      this.cadastros = cadastros;
    });
  }
}
