import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteElement } from '../models/ClienteElement';
@Injectable({
  providedIn: 'root',
})
export class ClienteServiceService {
  clienteURL = 'http://localhost:8080/cliente/';

  constructor(private httpClient: HttpClient) {}

  //Listar Clientes
  public getCliente(): Observable<ClienteElement[]> {
    return this.httpClient.get<ClienteElement[]>(this.clienteURL + 'listar');
  }

  //buscar por id
  pugetById(id: number): Observable<ClienteElement> {
    return this.httpClient.get<ClienteElement>(this.clienteURL + `id/${id}`);
  }

  //salvando
  public save(cliente: ClienteElement): Observable<any> {
    return this.httpClient.put<any>(this.clienteURL + ' novo', cliente);
  }

  // atualiza

  public update(id: number, cliente: ClienteElement): Observable<any> {
    return this.httpClient.put<any>(this.clienteURL + `update/${id}`, cliente);
  }

  // Delete
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.clienteURL + `delete/${id}`);
  }
}
