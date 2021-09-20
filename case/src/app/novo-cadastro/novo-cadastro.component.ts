import { Escola } from '../models/escola.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EscolaService } from '../services/escola.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-cadastro',
  templateUrl: './novo-cadastro.component.html',
  styleUrls: ['./novo-cadastro.component.scss'],
})
export class NovoCadastroComponent implements OnInit {
  @Output() aoCadastrar = new EventEmitter<any>();

  escola: string;
  turma: string;

  constructor(private service: EscolaService, private router: Router) {}

  cadastrar() {
    console.log('Cadastro Adicionado');

    const valorCadastro: Escola = {
      escola: this.escola,
      turma: this.turma,
      id: '',
      data: undefined
    };

    this.service.adicionar(valorCadastro).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('relatorio');
      },
      (error) => console.error(error)
    );
  }

  limparCampos() {
    this.escola = ' ';
    this.turma = ' ';
  }

  ngOnInit(): void {}
}
