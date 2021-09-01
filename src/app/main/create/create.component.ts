import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MainService } from '../main.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form = new FormGroup({});

  constructor(private fb: FormBuilder,
              private mainService: MainService,
              private toastr: ToastrService,
              private router: Router,) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['',Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(80)])],
      preparationTimeInMinutes: ['',Validators.compose([Validators.required])],
      description: ['',Validators.compose([Validators.required, Validators.minLength(15), Validators.maxLength(255)])],
      ingredient: this.fb.array([this.createIngredient()])
    })
  }

  createIngredient() {
    return this.fb.group({
      name: ['',Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(80)])],
      quantity: [1]
    })
  }

  addNextIngredient() {
    (this.form.controls['ingredient'] as FormArray).push(this.createIngredient())
  }

  getControls() {
    return (this.form.get('ingredient') as FormArray).controls;
  }

  submit() {
    this.mainService.addRecipe(this.form.value).subscribe(() => {
      this.goToMainPage();
      this.toastr.success('Dodano przepis!');
    }, err => {
      this.toastr.error('Błąd!');
    })
  }

  goToMainPage(): void {
    this.router.navigate(['']);
  }

  reset() : void {
    this.form.reset();
  }

}
