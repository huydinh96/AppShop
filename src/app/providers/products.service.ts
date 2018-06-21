import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products } from '../interface/Product';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit {
  private urlAPI = 'http://localhost:3000/products';
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }
  getProducts() {
    return this.http.get(this.urlAPI);
  }
add(product: Products): Observable < Products > {
  return this.http.post<Products>(this.urlAPI, product, httpOptions);
}
update(product: Products): Observable < Products > {
  return this.http.put<Products>(`${this.urlAPI}/${product.id}`, httpOptions);
}
deleted(id: number): Observable < Products > {
  return this.http.delete<Products>(`${this.urlAPI}/${id}`, httpOptions);
}
}
