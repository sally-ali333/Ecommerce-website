import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-by-brand',
  templateUrl: './product-by-brand.component.html',
  styleUrls: ['./product-by-brand.component.css'],
})
export class ProductByBrandComponent implements OnInit {
  allproducts: Product[] = [];
  brandId: string = '';
  newres: Product[] = [];
  msg: string = '';

  constructor(
    private _productService: ProductService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getId();
    this.getProducts();
  }

  getId() {
    this._activatedRoute.paramMap.subscribe((res: any) => {
      this.brandId = res.params.id;
    });
  }

  getProducts() {
    this._productService.getallproducts().subscribe({
      next: (res) => {
        for (let i = 0; i < res.data.length; i++) {
          if (this.brandId == res.data[i].brand._id) {
            this.newres.push(res.data[i]);
          }
        }
        this.allproducts = this.newres;

        if (this.allproducts.length === 0) {
          this.msg = 'Sorry..No available products for this brand now..';
        } else {
          this.msg = '';
        }
      },
    });
  }
}
