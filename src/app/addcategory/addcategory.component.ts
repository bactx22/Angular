import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeCategory } from '../category/category';
import { CategoryService } from '../services.ts/category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService,
  private router:Router) { }
  category: TypeCategory = {
    cateID: 0,
    name:''
  };
  ngOnInit(): void {
  }
  onAddCategory() {
    this.categoryService.addCetegory(this.category).subscribe(data => {
      this.router.navigateByUrl('/admin/category')
    })
  }

}
