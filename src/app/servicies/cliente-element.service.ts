import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteElement } from '../models/ClienteElement';
import { NovoClienteElement } from '../models/NovoCliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteElementService {
  clienteURL = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) {}

  //get
  ListarCliente(): Observable<ClienteElement[]> {
    return this.http.get<ClienteElement[]>(this.clienteURL);
  }

  //salvando
  public create(cliente: NovoClienteElement): Observable<NovoClienteElement> {
    return this.http.post<any>(this.clienteURL, cliente);
  }
  //update
  update(cliente: ClienteElement): Observable<ClienteElement> {
    const id = cliente.id;
    return this.http.put<ClienteElement>( `${this.clienteURL}/${id}`,cliente)
  }
  //delete
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.clienteURL}/${id}`);
  }
}
