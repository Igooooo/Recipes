import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/shared/model/recipe';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input()
  recipe?: Recipe;


  constructor() { }

  ngOnInit(): void {
  
  }

  ngDoCheck(): void {
  }

}
