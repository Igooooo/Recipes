import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-remove-element',
  templateUrl: './dialog-remove-element.component.html',
  styleUrls: ['./dialog-remove-element.component.scss']
})
export class DialogRemoveElementComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
