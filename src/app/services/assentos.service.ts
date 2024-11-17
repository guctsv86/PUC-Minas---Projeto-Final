import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssentosService {
  private apiUrl = 'http://localhost:3000/api/assentos'; // URL da API de assentos

  constructor(private http: HttpClient) {}

  // Obter todos os assentos disponíveis
  getAssentos(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // Obter informações de um assento específico
  getAssentoById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Reservar um assento
  reservarAssento(assentoId: string, usuarioId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/reservar`, {
      assentoId,
      usuarioId,
    });
  }
}
