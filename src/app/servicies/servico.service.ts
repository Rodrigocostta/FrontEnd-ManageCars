import { ServicoElement } from './../models/ServicoElement';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicoService {
  private servicoURL = 'http://localhost:8080/servico';

  constructor(private http: HttpClient) {}

  //get
  getLancamento(): Observable<ServicoElement[]> {
    return this.http.get<ServicoElement[]>(this.servicoURL);
  }
  //salvando
  create(servico: ServicoElement): Observable<ServicoElement> {
    return this.http.post<ServicoElement>(this.servicoURL, servico);
  }
  //atualizar
  update(servico: ServicoElement): Observable<ServicoElement> {
    return this.http.put<ServicoElement>(this.servicoURL, servico);
  }
  //delete
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.servicoURL}/${id}`);
  }
}
