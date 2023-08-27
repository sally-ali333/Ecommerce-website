import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  loading: boolean = false;
  errorMsg: string = '';
  notValidForm: boolean = false;
  hide:boolean=true
  
  constructor(private _authService: AuthService, private _router: Router) {}

  resetPasswordForm:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    newPassword:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,}$/)])
  })

  resetPassword(form:FormGroup){
if(form.valid){
  this.loading=true;
  this._authService.resetPassword(form.value).subscribe({
    next:(res)=>{
      console.log(res.token)
      this.loading=false
      this._router.navigate(['/signin']);
    },
    error:(err)=>{
      console.log(err)
      this.loading=false
      this.errorMsg=err.error.message;
    }
  })
}else {
  this.notValidForm=true

}

  }
}

