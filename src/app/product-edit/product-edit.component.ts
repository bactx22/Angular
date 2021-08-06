import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services.ts/product.service';
import { TypeProduct } from '../product/product';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  product: TypeProduct = {
    id: this.route.snapshot.params.id,
    name: '',
    price: 0,
    image: '',
    description: '',
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.route.params.subscribe((param) => {
      console.log('hi', param);
      this.productService.get(param.id).subscribe((data) => {
        this.product = data;
      });
    });
  }

  onEditProduct() {
    this.productService
      .updateProduct(this.product)
      .subscribe((data) => {
        this.router.navigateByUrl('admin/product');
      });
  }
}
