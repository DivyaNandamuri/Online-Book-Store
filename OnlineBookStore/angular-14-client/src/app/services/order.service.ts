import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getAll(id: any): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/${id}`);
  }

  orderBook(info: any): Observable<any> {
    return this.http.post(baseUrl, info);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
