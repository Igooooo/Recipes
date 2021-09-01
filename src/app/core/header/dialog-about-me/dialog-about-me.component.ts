import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-about-me',
  templateUrl: './dialog-about-me.component.html',
  styleUrls: ['./dialog-about-me.component.scss']
})
export class DialogAboutMeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  

}
