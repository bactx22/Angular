import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TypeProduct } from '../product/product';
import { ProductService } from '../services.ts/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
