import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-hot-offers',
  templateUrl: './hot-offers.component.html',
  styleUrls: ['./hot-offers.component.css']
})
export class HotOffersComponent implements OnInit {
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
          if (res.data[i].priceAfterDiscount) {
            this.newres.push(res.data[i]);
          }
        }
        this.allproducts = this.newres;
  
      },
    });
  }


}
