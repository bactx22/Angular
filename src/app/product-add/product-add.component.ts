import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TypeProduct } from '../product/product';
import { ProductService } from '../services.ts/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  // @Output() newProductEvent = new EventEmitter<TypeProduct>();
  product: TypeProduct = {
    id: 0,
    name: '',
    price: 0,
    image: '',
    description: '',
    // cateID:''
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}
  onAddProduct() {
    this.productService.addProduct(this.product).subscribe((data) => {
      this.router.navigateByUrl('/admin/product');
    });
  }
}
