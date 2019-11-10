import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  backPage() {
    this.router.navigate(['/empresas']);
  }
}
