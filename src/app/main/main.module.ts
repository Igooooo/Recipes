import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DialogRemoveElementComponent } from './list/dialog-remove-element/dialog-remove-element.component';
import { DetailsComponent } from './list/details/details.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS  } from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    ListComponent,
    DialogRemoveElementComponent,
    DetailsComponent,
    EditComponent,
    CreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatDialogModule,
    ToastrModule.forRoot()  
  ],
  exports: [
    ListComponent
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'always' } }
  ],
})
export class MainModule { }
