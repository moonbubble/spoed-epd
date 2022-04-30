// This marks the class as one that participates in the dependency injection system.
import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Observable<Recipe[]> {
    // of(RECIPES) returns an Observable<Recipe[]> that emits a single value, the array of mock recipes.
    const recipes = of(RECIPES);
    return recipes;
  }

  getRecipe(id: number): Observable<Recipe> {
    const recipe = RECIPES.find(r => r.id === id)!;
    return of(recipe);
  }
}
