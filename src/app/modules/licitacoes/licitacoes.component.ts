import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licitacoes',
  templateUrl: './licitacoes.component.html',
  styleUrls: ['./licitacoes.component.scss']
})
export class LicitacoesComponent implements OnInit {
  rows = [
    {
      numero: '',
      orgao: 'Comando da Aeronáutica',
      responsavel: 'Base aérea de Natal',
      atividade: 'Construção',
      valor: 'R$ 972.00',
      status: 'Em análise',
      risco: '100%'
    }
  ];

  constructor() {}

  ngOnInit() {}

  handleSearch() {}
}
