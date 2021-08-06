import { Component, OnInit,Input } from '@angular/core';
import { TypeProduct } from './product';
import { ProductService } from '../services.ts/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: TypeProduct[];
  validForm = false;
  detail: TypeProduct ;
  
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts()
  }

  onHandleRemove(id: number) {
    this.productService.removeProduct(id).subscribe(data => {
      this.products = this.products.filter(item => item.id != data.id);
    });
  }
  onDetail(product:TypeProduct) {
    console.log(product);
    this.detail = product;
  }

  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data
      console.log(data)
    })
  }
}

 // onHandleChange() {
  //   this.product.status = !this.product.status
  // }
  // onHandleChangeName(e:any) {
  //   this.product.name = e.target.value
  // }