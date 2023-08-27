import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-featuredproducts',
  templateUrl: './featuredproducts.component.html',
  styleUrls: ['./featuredproducts.component.css'],
})
export class FeaturedproductsComponent implements OnInit {
  allproducts: Product[] = [];
  searchTerm: string = '';

  constructor(
    private _productService: ProductService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getproducts();
    this.getSearchTerm();
  }

  getSearchTerm(){
    this._activatedRoute.queryParams.subscribe((params: any) => {
      this.searchTerm=params.serachBy
    });
  }

  getproducts() {
    this._productService.getallproducts().subscribe({
      next: (res) => {
        this.allproducts = res.data;
      },
    });
  }
}
