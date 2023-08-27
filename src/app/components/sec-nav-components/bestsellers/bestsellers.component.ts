import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.css']
})
export class BestsellersComponent implements OnInit {
  allproducts: Product[] = [];
  newres: Product[] = [];

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productService.getallproducts().subscribe({
      next: (res) => {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].sold>200) {
            this.newres.push(res.data[i]);
          }
        }
        this.allproducts = this.newres;
  
      },
    });
  }

}