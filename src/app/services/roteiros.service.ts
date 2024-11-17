import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoteirosService {
  private apiUrl = 'http://localhost:3000/api/roteiros';

  constructor(private http: HttpClient) { }

  getRoteiros(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
