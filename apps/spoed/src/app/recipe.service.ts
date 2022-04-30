// This marks the class as one that participates in the dependency injection system.
import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipesUrl = 'api/recipes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http
      .get<Recipe[]>(this.recipesUrl)
      .pipe(
        tap(
          (_) => console.log('fetched recipes'),
          catchError(this.handleError<Recipe[]>('getRecipes', []))
        )
      );
  }

  getRecipe(id: number): Observable<Recipe> {
    const url = `${this.recipesUrl}/${id}`;
    return this.http.get<Recipe>(url).pipe(
      tap((_) => console.log(`fetched recipe id=${id}`)),
      catchError(this.handleError<Recipe>(`getRecipe id=${id}`))
    );
  }

  /** POST: add a new recipe to the server */
  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.recipesUrl, recipe, this.httpOptions).pipe(
      tap((newRecipe: Recipe) => console.log(`added recipe w/ id=${newRecipe.id}`)),
      catchError(this.handleError<Recipe>('addRecipe'))
    );
  }

  /** PUT: update the recipe on the server */
  updateRecipe(recipe: Recipe): Observable<any> {
    return this.http.put(this.recipesUrl, recipe, this.httpOptions).pipe(
      tap((_) => console.log(`updated recipe id=${recipe.id}`)),
      catchError(this.handleError<any>('updateRecipe'))
    );
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
