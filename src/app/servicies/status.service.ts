import { StatusElement } from './../models/StatusElement';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private statusoURL = 'http://localhost:8080/ordem-servicos';

  constructor(private http: HttpClient) {}

  //get
  getstatus(): Observable<StatusElement[]> {
    return this.http.get<StatusElement[]>(this.statusoURL);
  }
  //salvando
  create(status: StatusElement): Observable<StatusElement> {
    return this.http.post<StatusElement>(this.statusoURL, status);
  }

  //update
  update(status: StatusElement): Observable<StatusElement> {
    const id = status.id;
    return this.http.put<StatusElement>(`${this.statusoURL}/${id}`, status);
  }
  // Delete
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.statusoURL}/${id}`);
  }
}
