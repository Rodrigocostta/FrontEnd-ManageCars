import { LancamentosElement } from './../models/lancamentoElement';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LancamentoService {
  private lancamentoURL = 'http://localhost:8080/lancamentos';

  constructor(private http: HttpClient) {}

  //get
  getLancamento(): Observable<LancamentosElement[]> {
    return this.http.get<LancamentosElement[]>(this.lancamentoURL);
  }
  //salvando
  create(lancamento: LancamentosElement): Observable<LancamentosElement> {
    return this.http.post<LancamentosElement>(this.lancamentoURL, lancamento);
  }

  //update
  update(lancamento: LancamentosElement): Observable<LancamentosElement> {
    const id = lancamento.id;
    return this.http.put<LancamentosElement>(
      `${this.lancamentoURL}/${id}`,
      lancamento
    );
  }
  // Delete
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.lancamentoURL}/${id}`);
  }
}
