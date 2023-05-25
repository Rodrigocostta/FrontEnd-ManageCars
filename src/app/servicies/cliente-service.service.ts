
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {
  clienteURL = 'http://localhost:8080/cliente/';

  constructor(private httpClient: HttpClient) {}


                         //Listar Clientes
  public getCliente(): Observable<Cliente[] >  {
    return this.httpClient.get<Cliente[]>(this.clienteURL + 'listar');
  }

                          //buscar por id
  public getById( id:number): Observable<Cliente>  {
    return this.httpClient.get<Cliente>(this.clienteURL + `id/${id}`);
  }

                          //salvando
  public save(cliente:Cliente): Observable<any>{
    return this.httpClient.put<any>(this.clienteURL +' novo',cliente);
  }

                         // atualiza

  public update(id: number,cliente:Cliente): Observable<any>{
  return this.httpClient.put<any>(this.clienteURL +`update/${id}`,cliente);
}

                         // Delete
public delete( id:number): Observable<any>  {
  return this.httpClient.delete<any>(this.clienteURL + `delete/${id}`);
   }
};
