import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Recipe } from 'src/app/shared/model/recipe';
import { MainService } from '../main.service';
import { DialogRemoveElementComponent } from './dialog-remove-element/dialog-remove-element.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  recipe?: Recipe;
  searchForm = new FormGroup({});
  recipes: Recipe[] = [];
  result: any;
  
  constructor(private mainService: MainService,
              private router: Router,
              private fb: FormBuilder,
              private toastr: ToastrService,              
              public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getAllRecipe();
    this.createForm();
    this.refresh();
  }

  ngDoCheck(): void {
    
  }

  createForm() {
    this.searchForm = this.fb.group({
      name: ['',Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(80)])],
    })
  }

  getAllRecipe(): void {
    this.mainService.getAllRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    }, err => {
      this.toastr.error('Brak możliwości pobrania listy');
    })
  }

  refresh() : void {
    this.getAllRecipe();
    this.toastr.success('Lista została odświeżona');
  }

  removeRecipe(id: string): void {  
    this.mainService.removeRecipe(id).subscribe(() => {
      this.getAllRecipe();
      this.toastr.success('Usunięto przepis!');
    }, err => {
      this.toastr.error('Błąd!');
    }); 
  }

  goToRecipeDetails(recipe : Recipe): void {
    this.recipe = recipe;
  }

  goToEditRecipe(recipe : Recipe, event: any): void {
    event.stopPropagation();
    this.router.navigate(['/edit', recipe._id]);
  }

  openDialogremoveReciple(recipe : Recipe, event: any) : void {
    event.stopPropagation();
    this.dialog.open(DialogRemoveElementComponent, {data: {name: recipe.name}}).
    afterClosed().
    subscribe(result => {
      if(result === 'false'){
        this.removeRecipe(recipe._id);
      }     
    });
  }

  loadRecipesByFilter(): void { // to correction
    let SearchName = this.searchForm.controls['name'].value
    this.result = this.recipes.find(element => element.name = SearchName);
    this.recipes = this.result;
    console.log(this.recipes)
    this.searchForm.reset();
  }
}
