import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { RecipeService } from './recipe.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Recipe } from './recipe';

describe('RecipeService', () => {
  let service: RecipeService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(RecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it.skip('should get all recipes', () => {
    // To implement, use httpClient and httpTestingController to test
  });

  it.skip('should get one recipe', () => {
    // To implement, use httpClient and httpTestingController to test
  });

  it.skip('should add one recipe', () => {
    // To implement, use httpClient and httpTestingController to test
  });

  it.skip('should update one recipe', () => {
    // To implement, use httpClient and httpTestingController to test
  });

  it.skip('should delete one recipe', () => {
    // To implement, use httpClient and httpTestingController to test
  });
});
