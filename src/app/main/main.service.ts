import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../shared/model/recipe';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private key: string = '54e605e9d51f40aba0a81d74a09d9334'
  private url: string = 'https://crudcrud.com/api/'+`${this.key}`+'/recipe';

  constructor(private http: HttpClient) {
   }

  addRecipe(data: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.url, data) ;
  }

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.url);
  }

  removeRecipe(id: string): Observable<Recipe> {
    return this.http.delete<Recipe>(this.url +'/' +`${id}`)
  }

  updateRecipe(data: Recipe, id: string): Observable<Recipe> {
    return this.http.put<Recipe>(this.url+ '/' +`${id}`, data)
  }

  getRecipe(id: string) : Observable<Recipe> { 
    return this.http.get<Recipe>(this.url+ '/'+ `${id}`)
  }
}
