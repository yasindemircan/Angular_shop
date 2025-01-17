import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { from } from 'rxjs';
import {CategoryService} from "../services/category.service";
import { AlertifyService } from '../services/alertify.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService],
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
  title ="Kategori Listesi"
  categories : Category[];
  
  ngOnInit(): void {
    this.categoryService.getCategies().subscribe(data=>{
      this.categories=data;
  });
}
}
