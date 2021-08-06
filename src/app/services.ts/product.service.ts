import { Injectable } from '@angular/core';
import { TypeProduct } from '../product/product';
// import { dataFake } from '../data-fake';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API: string = 'https://60eef47ceb4c0a0017bf46dc.mockapi.io/products';

  // products: TypeProduct[] = dataFake;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<TypeProduct[]> {
    return this.http.get<TypeProduct[]>(this.API);
  }

  addProduct(item: TypeProduct): Observable<TypeProduct> {
    return this.http.post<TypeProduct>(this.API, item);
  }
  removeProduct(id: number): Observable<TypeProduct> {
    return this.http.delete<TypeProduct>(`${this.API}/${id}`);
  }
  get(id: number): Observable<TypeProduct> {
    return this.http.get<TypeProduct>(`${this.API}/${id}`);
  }
  updateProduct(product: TypeProduct): Observable<TypeProduct> {
    return this.http.put<TypeProduct>(`${this.API}/${product.id}`, product);
  }
}
