import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Association } from '../Model/association';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssociationService {
  private associationUrl: String;
  constructor(private http: HttpClient) {
    this.associationUrl = 'http://localhost:8080';
  }
  public findAll(): Observable<Association[]> {
    return this.http.get<Association[]>(`${this.associationUrl}/listes`);
  }

  public save(association: Association){
    return this.http.post<Association>(`${this.associationUrl}/create`, association);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete(`${this.associationUrl}/delete/${id}`);
  }
  public getAssociation(id: number): Observable<any>{
    return this.http.get<Association>(`${this.associationUrl}/list/${id}`);
  }
  public putAssociation(id:number, data: any): Observable<any>{
    return this.http.put(`${this.associationUrl}/update/${id}`, data)
  }
}
