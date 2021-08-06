import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TypeProduct } from '../product/product';
import { ProductService } from '../services.ts/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  products: TypeProduct[];
  constructor(private productService:ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(data)
    })
  }
  ngOnInit(): void {
  }

}
