import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nationalite } from '../Model/nationalite';

@Injectable({
  providedIn: 'root'
})
export class NationaliteService {

  private nationaliteUrl: String;
  constructor(private http: HttpClient) {
    this.nationaliteUrl = 'http://localhost:8080';
  }
  public findAll(): Observable<Nationalite[]> {
    return this.http.get<Nationalite[]>(`${this.nationaliteUrl}/listes`);
  }

  public save(nationalite: Nationalite){
    return this.http.post<Nationalite>(`${this.nationaliteUrl}/create`, nationalite);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete(`${this.nationaliteUrl}/delete/${id}`);
  }
  public getNationalite(id: number): Observable<any>{
    return this.http.get<Nationalite>(`${this.nationaliteUrl}/list/${id}`);
  }
  public putNationalite(id:number, data: any): Observable<any>{
    return this.http.put(`${this.nationaliteUrl}/update/${id}`, data)
  }
}
