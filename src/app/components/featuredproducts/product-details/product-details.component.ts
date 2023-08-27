import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  idProduct: string = '';
  productDetails: Product = {} as Product;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    autoplay : true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductService,
    private _cartService: CartService,
    private _router:Router
  ) {}

  ngOnInit(): void {
    this.getId();
    this.getProduct();
  }

  getId() {
    this._activatedRoute.paramMap.subscribe((res: any) => {
      this.idProduct = res.params.id;
    });
  }

  getProduct() {
    this._productService.getProductById(this.idProduct).subscribe({
      next: (res) => {
        this.productDetails = res.data;
      },
    });
  }

  addToCart(id: string) {
    if(localStorage.getItem('userToken')){
      this._cartService.addToCart(id).subscribe({
        next :(res)=>{
        this._cartService.noOfItems.next(res.numOfCartItems)
        }
       } )
    } else {
      this._router.navigate(['/signin']);

    }     
  }

}
