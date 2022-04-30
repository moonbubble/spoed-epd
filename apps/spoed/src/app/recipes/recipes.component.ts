import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'spoed-epd-use-case-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'amount', 'unit', 'action'];
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {
    // Reserve the constructor for minimal initialization such as wiring constructor parameters to properties. 
    // The constructor shouldn't do anything. 
    // It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
  }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    // This code waits for the Observable to emit the aary of recipes
    // The subscribe() method passes the emitted array to the callback, which sets the component's recipes property
    // This asynchronous approach will work when the RecipeService requests recipes from the server.
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }
}
