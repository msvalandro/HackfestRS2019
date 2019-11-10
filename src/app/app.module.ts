import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './modules/home/home.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { CardComponent } from './modules/card/card.component';
import { LicitacoesComponent } from './modules/licitacoes/licitacoes.component';
import { EmpresasComponent } from './modules/empresas/empresas.component';
import { AtividadesComponent } from './modules/atividades/atividades.component';
import { ContratosComponent } from './modules/contratos/contratos.component';
import { LicitacaoComponent } from './modules/licitacao/licitacao.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'licitacoes', component: LicitacoesComponent },
  { path: 'licitacoes/13', component: LicitacaoComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'atividades', component: AtividadesComponent },
  { path: 'contratos', component: ContratosComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    CardComponent,
    LicitacoesComponent,
    EmpresasComponent,
    AtividadesComponent,
    ContratosComponent,
    LicitacaoComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
