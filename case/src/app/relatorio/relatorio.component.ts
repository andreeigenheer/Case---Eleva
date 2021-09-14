import { Escola } from '../models/escola.model';
import { Component, Input, OnInit } from '@angular/core';
import { EscolaService } from '../services/escola.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss'],
})
export class RelatorioComponent implements OnInit {
  cadastros: any[];

  constructor(private service: EscolaService) {}

  ngOnInit(): void {
    this.service.todas().subscribe((cadastros: Escola[]) => {
      console.table(cadastros);
      this.cadastros = cadastros;
    });
  }
}
