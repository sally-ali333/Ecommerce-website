import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-newproducts',
  templateUrl: './newproducts.component.html',
  styleUrls: ['./newproducts.component.css'],
})
export class NewproductsComponent implements OnInit {
  allproducts: Product[] = [];
  newres: Product[] = [];
  date1: any;
  date2: any;
  diffTime:number=0
  diffDays:number=0
  ProductNo:number=0

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.date1 = new Date();
    this._productService.getallproducts().subscribe({
      next: (res) => {
        for (let i = 0; i < res.data.length; i++) {
          this.date2 = new Date(res.data[i].createdAt);
          this.diffTime = Math.abs(this.date1 - this.date2);
          this.diffDays = Math.ceil(this.diffTime/ (1000 * 60 * 60 * 24));


          if ((this.diffDays < 120)) {
            this.newres.push(res.data[i]);
          }
          
        }
       
        this.allproducts = this.newres;
        this.ProductNo=this.newres.length
      },
    });
  }
}
