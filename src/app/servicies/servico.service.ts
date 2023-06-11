import { ServicoElement } from './../models/ServicoElement';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicoService {
  private servicoURL = 'http://localhost:8080/servicos';

  constructor(private http: HttpClient) {}

  //get
  getLancamento(): Observable<ServicoElement[]> {
    return this.http.get<ServicoElement[]>(this.servicoURL);
  }
  //salvando
  create(servico: ServicoElement): Observable<ServicoElement> {
    return this.http.post<ServicoElement>(this.servicoURL, servico);
  }
  //update
  update(lancamento: ServicoElement): Observable<ServicoElement> {
    const id = lancamento.id;
    return this.http.put<ServicoElement>(`${this.servicoURL}/${id}`,lancamento);
  }
  //delete
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.servicoURL}/${id}`);
  }
}
