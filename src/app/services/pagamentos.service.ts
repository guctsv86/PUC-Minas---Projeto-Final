import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PagamentosService {
  private apiUrl = 'http://localhost:3000/api/pagamentos'; // URL da API de pagamentos

  constructor(private http: HttpClient) {}

  // Realizar um pagamento
  processarPagamento(dadosPagamento: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, dadosPagamento);
  }

  // Consultar status de pagamento
  getStatusPagamento(pagamentoId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${pagamentoId}`);
  }

  // Cancelar pagamento (opcional)
  cancelarPagamento(pagamentoId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${pagamentoId}`);
  }
}