import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {


  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:3000/user" ;


  getUsers(): Observable<user[]> {
    return this.http.get<user[]>(this.baseUrl);
  }

  getUser(data:any): Observable<user> {
    const url = `${this.baseUrl}/${data}`;
    return this.http.get<user>(url);
  }

  createUser(userInfo: any): Observable<user> {
    return this.http.post<user>(this.baseUrl, userInfo);
  }

  updateUser(id: number, userInfo: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put(url, userInfo);
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }



}
