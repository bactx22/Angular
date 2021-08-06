import { Component, OnInit ,Input} from '@angular/core';
import { TypeProduct } from '../product/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services.ts/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: TypeProduct;
  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct()
  }
  getProduct() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.productService.get(params.id).subscribe(data => {
        this.product = data
      })
    })
  }

}
