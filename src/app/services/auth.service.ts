import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: BehaviorSubject<any> = new BehaviorSubject(''); // use b.s with variable to make subscribe ..it like observable with methods
  userName: BehaviorSubject<any> = new BehaviorSubject('');
  userEmail: BehaviorSubject<any> = new BehaviorSubject('');

  constructor(private _httpclient: HttpClient, private _router: Router) {
    if (localStorage.getItem('userToken')) {
      // because of Refresh ..data is gone
      this.getUserData();
      this.userName.next(localStorage.getItem('username'));
      this.userEmail.next(localStorage.getItem('useremail'));
    }
  }

  getUserData() {
    let userToken = JSON.stringify(localStorage.getItem('userToken')); //convert to string because of jwt take string
    let encodedToken = jwtDecode(userToken); // to convert token to data(id,name,role)
    this.userData.next(encodedToken); // next method with behavior subject instead =
    localStorage.setItem('userId', this.userData.value.id);
  }

  signUp(data: any): Observable<any> {
    return this._httpclient.post(
      `https://ecommerce.routemisr.com/api/v1/auth/signup`,
      data
    );
  }

  signIn(data: any): Observable<any> {
    return this._httpclient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      data
    );
  }

  signOut() {
    localStorage.clear(); /* userToken, useremail , username , userphone ,userid*/
    this.userData.next(null);
    this._router.navigate(['/signin']);
  }

  forgotPassword(data: any): Observable<any> {
    return this._httpclient.post(
      `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
      data
    );
  }

  verifyResetCode(data: any): Observable<any> {
    return this._httpclient.post(
      `https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,
      data
    );
  }

  resetPassword(data: any): Observable<any> {
    return this._httpclient.put(
      `https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,
      data
    );
  }

  changePassword(data: any): Observable<any> {
    return this._httpclient.put(
      `https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,
      data
    );
  }

  updateUserData(data: any): Observable<any> {
    return this._httpclient.put(
      `https://ecommerce.routemisr.com/api/v1/users/updateMe/`,
      data
    );
  }
}
