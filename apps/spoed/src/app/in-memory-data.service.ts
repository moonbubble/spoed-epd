import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes = [
      { id: 1, name: 'Hydrogen', amount: 1.0079, unit: 'stuks', description: 'blabla' },
      { id: 2, name: 'Helium', amount: 4.0026, unit: 'gram' },
      { id: 3, name: 'Lithium', amount: 6.941, unit: 'milliliter' },
      { id: 4, name: 'Beryllium', amount: 9.0122, unit: 'milliliter' },
      { id: 5, name: 'Boron', amount: 10.811, unit: 'gram' },
      { id: 6, name: 'Carbon', amount: 12.0107, unit: 'milliliter' },
      { id: 7, name: 'Nitrogen', amount: 14.0067, unit: 'stuks' },
      { id: 8, name: 'Oxygen', amount: 15.9994, unit: 'stuks' },
      { id: 9, name: 'Fluorine', amount: 18.9984, unit: 'stuks' },
      { id: 10, name: 'Neon', amount: 20.1797, unit: 'gram' },
    ];

    return { recipes };
  }

  genId(recipes: Recipe[]): number {
    return recipes.length > 0
      ? Math.max(...recipes.map((recipe) => recipe.id)) + 1
      : 1;
  }

  constructor() {}
}
