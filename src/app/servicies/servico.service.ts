import { ServicoElement } from './../models/ServicoElement';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private servicoURL = 'http://localhost:8080/servico';

  constructor(private http: HttpClient) { }
    getLancamento(): Observable<ServicoElement[]>{
     return this.http.get<ServicoElement[]>(this.servicoURL);

  }
//salvando
 create(servico:ServicoElement): Observable<ServicoElement>{
     return this.http.post<ServicoElement>(this.servicoURL,servico);
   }
}
