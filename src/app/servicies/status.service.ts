import { StatusElement } from './../models/StatusElement';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private statusoURL = 'http://localhost:8080/ordemServico';

  constructor(private http: HttpClient) {}

  //get
  getLancamento(): Observable<StatusElement[]> {
    return this.http.get<StatusElement[]>(this.statusoURL);
  }
  //salvando
  create(lancamento: StatusElement): Observable<StatusElement> {
    return this.http.post<StatusElement>(this.statusoURL, lancamento);
  }

  //update
  update(lancamento: StatusElement): Observable<StatusElement> {
    const id = lancamento.id;
    return this.http.put<StatusElement>(`${this.statusoURL}/${id}`, lancamento);
  }
  // Delete
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.statusoURL}/${id}`);
  }
}
