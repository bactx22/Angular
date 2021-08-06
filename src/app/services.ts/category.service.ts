import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeCategory } from '../category/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API: string = 'https://60eef47ceb4c0a0017bf46dc.mockapi.io/category';
  constructor(private http: HttpClient) { }
  getCategory(): Observable<TypeCategory[]>{
    return this.http.get<TypeCategory[]>(this.API)
  }
  removeCategory(cateID: number): Observable<TypeCategory>{
    return this.http.delete<TypeCategory>(`${this.API}/${cateID}`)
  }
  addCetegory(item:TypeCategory): Observable<TypeCategory>{
    return this.http.post<TypeCategory>(this.API,item)
  }
  get(cateID: number): Observable<TypeCategory>{
    return this.http.get<TypeCategory>(`${this.API}/${cateID}`)
  }
  updateCategory(category: TypeCategory): Observable<TypeCategory>{
    return this.http.put<TypeCategory>(`${this.API}/${category.cateID}`,category)
  }
}
