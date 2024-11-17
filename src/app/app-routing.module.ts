import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { SelecaoRoteiroComponent } from './selecao-roteiro/selecao-roteiro.component';
import { EscolhaAssentoComponent } from './escolha-assento/escolha-assento.component';
import { PagamentoComponent } from './pagamento/pagamento.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },  // Página inicial
  { path: 'sobre', component: SobreComponent },
  { path: 'ajuda', component: AjudaComponent },
  { path: 'roteiros', component: SelecaoRoteiroComponent }, // Seleção de roteiro
  { path: 'assentos', component: EscolhaAssentoComponent }, // Escolha de assento
  { path: 'pagamento', component: PagamentoComponent }, // Pagamento
  { path: '**', redirectTo: '/home' } // Redireciona rotas inválidas para 'home'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
