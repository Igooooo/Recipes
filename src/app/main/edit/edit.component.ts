import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Recipe } from 'src/app/shared/model/recipe';
import { MainService } from '../main.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  updateForm = new FormGroup({});
  recipe?: Recipe;
  
  constructor(private fb: FormBuilder,
              private mainService: MainService, 
              private route : ActivatedRoute,
              private toastr: ToastrService,
              private router: Router,) { }

  ngOnInit(): void {
    this.createUpdateForm();
    this.getRecipe();
    this.recipe?.ingredient.length
  }

  createUpdateForm() {
    this.updateForm = this.fb.group({
      name: [],
      preparationTimeInMinutes: [],
      description: [],
      ingredient: this.fb.array([this.createIngredient()])
    })
  }

  createIngredient() {
    return this.fb.group({
      name: [],
      quantity: [1]
    })
  }

  addNextIngredient() {
    (this.updateForm.controls['ingredient'] as FormArray).push(this.createIngredient())
  }

  getControls() {
    return (this.updateForm.get('ingredient') as FormArray).controls;
  }

  getRecipe() : void {
    // z aktualnego URLa zczytaujemy id igawka aktualnego routa. Pozwala zczytać aktualnego URLa i dobrac się do jego id | + przebaria string na number
    const id = this.route.snapshot.params['id']; 
    this.mainService.getRecipe(id).subscribe( // przekazujemy id i zostajemy subscriberami
      (recipe) => {
      this.recipe = recipe;
      this.updateForm.patchValue(this.recipe);
      }, err => {
        this.toastr.error('Błąd!');
      }) 
  }

  updateRecipe(): void {
    const id = this.route.snapshot.params['id'];
    this.mainService.updateRecipe(this.updateForm.value, id).subscribe(() => {
      this.goToMainPage();
      this.toastr.success('Zedytowano przepis!');
    }, err => {
      this.toastr.error('Błąd!');

    })
  }

  goToMainPage(): void {
    this.router.navigate(['']);
  }

  


}
