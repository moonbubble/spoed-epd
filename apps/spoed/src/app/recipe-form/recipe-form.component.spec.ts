import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RecipeFormComponent } from './recipe-form.component';

describe('RecipeFormComponent', () => {
  let component: RecipeFormComponent;
  let fixture: ComponentFixture<RecipeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatTableModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        BrowserAnimationsModule
      ],
      declarations: [RecipeFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render h2 title for adding a recipe', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('VOEG EEN RECEPT TOE');
  });

  it.skip('should render h2 title for editing a recipe', () => {
    // To implement test with a mocked url like /edit/2
    // because only with an id in the url, the form will go into edit mode
    // const compiled = fixture.nativeElement as HTMLElement;
    // expect(compiled.querySelector('h2')?.textContent).toContain('BEWERK RECEPT');
  });

  it('should render buttons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button.mat-raised-button')?.textContent).toContain('Opslaan');
    expect(compiled.querySelector('button.mat-button')?.textContent).toContain('Annuleren');
  });

  it.skip('should render form controls', () => {
    // To implement, test the existence of the fields and select input
  });
});
