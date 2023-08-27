import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/interface/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {

  brandList:Brand[]=[]
  constructor(private _brandService: BrandService) {}

  ngOnInit(): void {
    this.getAllBrands();
  }

  getAllBrands() {
    this._brandService.getAllBrands().subscribe({
      next: (res) => {
        this.brandList=res.data       
      },
    });
  }

}
