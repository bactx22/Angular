import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services.ts/category.service';
import { TypeCategory } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: TypeCategory[];
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategory()
  }
  getCategory() {
    this.categoryService.getCategory().subscribe(data => {
      this.category = data
      console.log(data)
    })
  }

  removeCetegory(cateID:number) {
    this.categoryService.removeCategory(cateID).subscribe(data => {
      this.category = this.category.filter(item => item.cateID != data.cateID);
    })
  }
}
