
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import { ClienteElement } from '../models/ClienteElement';

@Injectable({
  providedIn: 'root'
})
export class ClienteElementService {
  clienteURL = 'http://localhost:8080/cliente/';

  constructor(private http: HttpClient) { }
  ListarCliente(): Observable<ClienteElement[]>{
   return this.http.get<ClienteElement[]>(this.clienteURL + 'listar');
  }

  //salvando
 public create(lancamento:ClienteElement): Observable<ClienteElement>{
  return this.http.post<any>(this.clienteURL +' novo',lancamento);
}
}
