import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.css']
})
export class ProductsByCategoryComponent implements OnInit {
  allproducts: Product[] = [];
  newres: Product[] = [];
  categoryId: string = '';
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
      this.categoryId = res.params.id;
      this.getProducts(this.categoryId);
      console.log(this.categoryId)
    });
  }

  getProducts(Id:string) {
    this._productService.getallproducts().subscribe({
      next: (res) => { 
        this.newres=[]      
        for (let i = 0; i < res.data.length; i++) {
          if (Id == res.data[i].category._id) {
            this.newres.push(res.data[i]);
          }
        }
        console.log(this.newres)
        this.allproducts = this.newres;
   

        if (this.allproducts.length === 0) {
          this.msg = 'Sorry..No available products for this category now..';
        } else {
          this.msg = '';
        }
      },
    });
  }
}

