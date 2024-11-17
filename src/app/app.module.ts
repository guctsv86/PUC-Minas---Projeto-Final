import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { SelecaoRoteiroComponent } from './selecao-roteiro/selecao-roteiro.component';

import { FormsModule } from '@angular/forms';
import { EscolhaAssentoComponent } from './escolha-assento/escolha-assento.component';
import { PagamentoComponent } from './pagamento/pagamento.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SobreComponent,
    AjudaComponent,
    SelecaoRoteiroComponent,
    EscolhaAssentoComponent,
    PagamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
