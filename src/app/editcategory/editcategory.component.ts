import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeCategory } from '../category/category';
import { CategoryService } from '../services.ts/category.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {
  category: TypeCategory = {
    cateID: this.route.snapshot.params.id,
    name: ''
  }
  constructor(private route: ActivatedRoute,private categoryService:CategoryService,private router: Router) { }

  ngOnInit(): void {
    this.get()
  }
  get() {
    this.route.params.subscribe(param => {
      this.categoryService.get(param.id).subscribe(data => {
        this.category = data
      })
    })
  }
  onEditCate() {
    this.categoryService.updateCategory(this.category).subscribe(data => {
      this.router.navigateByUrl('admin/category')
    })
  }

}
