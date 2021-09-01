import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DialogAboutMeComponent } from './header/dialog-about-me/dialog-about-me.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS  } from '@angular/material/form-field';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    DialogAboutMeComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule, 
    AppRoutingModule,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'always' } }
  ],
})
export class CoreModule { }
