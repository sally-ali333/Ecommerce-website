import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sec-navbar',
  templateUrl: './sec-navbar.component.html',
  styleUrls: ['./sec-navbar.component.css'],
})
export class SecNavbarComponent {

  searchTerm:string='';

  constructor(private _router:Router){

  }


  getproduct(term:string) {
    this._router.navigate(
      ['/products'],
      { queryParams: { serachBy: `${term}` } }
    );
  
  }






}
