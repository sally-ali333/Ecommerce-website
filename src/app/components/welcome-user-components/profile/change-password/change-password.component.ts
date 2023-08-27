import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  loading: boolean = false;
  errorMsg: string = '';
  successMsg:boolean=false
  notValidForm: boolean = false;
hide:boolean=true

  constructor(private _authService: AuthService,private _router:Router) {}

  changePasswordForm: FormGroup = new FormGroup({
    currentPassword: new FormControl('', [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,}$/),]),
    password: new FormControl('', [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,}$/),]),
    rePassword: new FormControl('', [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,}$/),]),  
  },  { validators: this.validateRePassword });


  validateRePassword(changePasswordForm: any) {
    let passwordControl = changePasswordForm.get('password');
    let repasswordControl = changePasswordForm.get('rePassword');

    if (passwordControl.value == repasswordControl.value) {
      return null; // no errors
    } else {
      repasswordControl.setErrors({repasswordNotMatch: 'repassword is not match password',});
      return {repasswordNotMatch: 'repassword is not match password'};
    }
  }

  changePassword(form: FormGroup) {
    if (form.valid) {
      this.loading = true;
      this._authService.changePassword(form.value).subscribe({
        next: (res) => {
          this.errorMsg='';
          console.log(res);
          localStorage.setItem('userToken',res.token)
          this.loading = false;
          this.successMsg=true;
          // this._authService.signOut()
          setTimeout(()=>{this._authService.signOut()}, 3000);
          
       },
        error: (err) => {
          this.successMsg=false;
          console.log(err);
          this.loading = false;
          this.errorMsg = err.error.errors.msg;
        },
      });
    } else {
      this.notValidForm = true;
    }
  }
}

