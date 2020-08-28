import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css']
})
export class ProductAddForms2Component implements OnInit {

  constructor(private formBuilder:FormBuilder) {
    
   }

  ngOnInit(): void {
  }

}
