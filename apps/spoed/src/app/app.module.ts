import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipesComponent } from './recipes/recipes.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';

@NgModule({
  declarations: [AppComponent, RecipesComponent, RecipeFormComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatTableModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
