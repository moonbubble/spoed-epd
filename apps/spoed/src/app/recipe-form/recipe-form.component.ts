import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { ActivatedRoute } from '@angular/router';
// The location is an Angular service for interacting with the browser.
// You can use it to navigate back to the view that navigated here.
import { Location } from '@angular/common';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'spoed-epd-use-case-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
})
export class RecipeFormComponent implements OnInit {
  @Input() recipe?: Recipe;
  unitOptions = ['stuks', 'gram', 'milliliter'];

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService
      .getRecipe(id)
      .subscribe((recipe) => (this.recipe = recipe));
  }

  save(): void {
    if (this.recipe) {
      this.recipeService
        .updateRecipe(this.recipe)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
