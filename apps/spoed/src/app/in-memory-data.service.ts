import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes = [
      { id: 1, name: 'Hydrogen', amount: 30, unit: 'stuks', description: 'Dit gebruik je voor een zere keel' },
      { id: 2, name: 'Helium', amount: 500, unit: 'gram' },
      { id: 3, name: 'Lithium', amount: 20, unit: 'milliliter' },
      { id: 4, name: 'Beryllium', amount: 115, unit: 'milliliter', description: 'Tegen hoofdpijn' },
      { id: 5, name: 'Boron', amount: 20, unit: 'gram' },
      { id: 6, name: 'Carbon', amount: 5, unit: 'milliliter' },
      { id: 7, name: 'Nitrogen', amount: 15, unit: 'stuks', description: 'Ontstekingsremmend.' },
      { id: 8, name: 'Oxygen', amount: 100, unit: 'stuks' },
      { id: 9, name: 'Fluorine', amount: 3, unit: 'stuks' },
      { id: 10, name: 'Neon', amount: 200, unit: 'gram' },
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
