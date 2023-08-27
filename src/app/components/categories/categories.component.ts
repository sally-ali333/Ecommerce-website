import { Component, OnInit } from '@angular/core';
import { Category, SubCategory } from 'src/app/interface/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  allcategories: Category[] = [];
  subCategories: SubCategory[] = [];
  newres: SubCategory[] = [];
  openMenu:boolean=false

  constructor(private _categoryService: CategoryService) {
  }
 
  ngOnInit(): void {
    this.getAllCategories();

  }

  getAllCategories() {
    this._categoryService.getAllCategories().subscribe({
      next: (res) => {
        this.allcategories = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getSubCategory(id: string) {
    this._categoryService.getSubCategories(id).subscribe({
      next: (res) => {
        this.newres=[]
        for (let i = 0; i < res.data.length; i++) {
          this.newres.push(res.data[i])
        }
       this.subCategories=this.newres
       console.log()
       if(this.subCategories.length!==0){
        this.openMenu=true
       }else {
        this.openMenu=false
       }
       
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getProductsByCategory(id:string) {
    console.log("Hi",id)
  }

 
}
