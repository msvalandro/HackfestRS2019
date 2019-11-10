import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-licitacao',
  templateUrl: './licitacao.component.html',
  styleUrls: ['./licitacao.component.scss']
})
export class LicitacaoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  backPage() {
    this.router.navigate(['/licitacoes']);
  }
}
