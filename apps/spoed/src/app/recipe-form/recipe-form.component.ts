import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// The location is an Angular service for interacting with the browser.
// You can use it to navigate back to the view that navigated here.
import { Location } from '@angular/common';
import { RecipeService } from '../recipe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'spoed-epd-use-case-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
})
export class RecipeFormComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    amount: ['', Validators.required],
    unit: ['', Validators.required],
    description: [''],
  });
  id?: number;
  unitOptions = ['stuks', 'gram', 'milliliter'];
  isAddMode = false;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.isAddMode = !this.id;

    if (!this.isAddMode) {
      this.getRecipe(this.id);
    }
  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  getRecipe(id: number): void {
    // TODO: If recipeService throws an error (f.e. when the id doesn't exist),
    // give a 404, or redirect to the recipes overview
    this.recipeService
      .getRecipe(id)
      .subscribe((recipe) => this.form.patchValue(recipe));
  }

  onSubmit(): void {
    if (this.isAddMode) {
      this.createUser();
    } else {
      this.updateUser();
    }
  }

  updateUser(): void {
    this.recipeService
      .updateRecipe({ id: this.id, ...this.form.value })
      .subscribe(() => this.goBack());
  }

  createUser(): void {
    this.recipeService
      .addRecipe(this.form.value)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
