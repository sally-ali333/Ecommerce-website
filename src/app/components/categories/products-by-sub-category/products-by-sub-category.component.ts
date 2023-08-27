import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-by-sub-category',
  templateUrl: './products-by-sub-category.component.html',
  styleUrls: ['./products-by-sub-category.component.css']
})
export class ProductsBySubCategoryComponent implements OnInit {
  allproducts: Product[] = [];
  Id: string = '';
  newres: Product[] = [];
  msg: string = '';

  constructor(
    private _productService: ProductService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getId();
  }

  getId() {
    this._activatedRoute.paramMap.subscribe((res: any) => {
      this.Id = res.params.id;
      this.getProducts(this.Id);

    });
  }

  getProducts(id:string) {
    this._productService.getallproducts().subscribe({
      next: (res) => {
        this.newres=[]
        for (let i = 0; i < res.data.length; i++) {
          if (id == res.data[i].subcategory[0]._id) {
            this.newres.push(res.data[i]);
          }
        }
        this.allproducts = this.newres;

        if (this.allproducts.length === 0) {
          this.msg = 'Sorry..No available products for this subcategory now..';
        } else {
          this.msg = '';
        }
      },
    });
  }
}

