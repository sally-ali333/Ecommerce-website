import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent {
  loading: boolean = false;
  errorMsg: string = '';
  successMsg:boolean=false
  notValidForm: boolean = false;
  username:string=''
  useremail:string=''


  constructor(private _authService: AuthService,private _router:Router) {
    this._authService.userName.subscribe((res)=>this.username=res)
    this._authService.userEmail.subscribe((res)=>this.useremail=res)

    this.updateForm.get('name')?.setValue(this.username)
    this.updateForm.get('email')?.setValue(this.useremail)

  }

  updateForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  });

  updateData(form: FormGroup) {
    if (form.valid) {
      this.loading = true;
      this._authService.updateUserData(form.value).subscribe({
        next: (res) => {
          this.errorMsg=''
          // console.log(res);
          localStorage.setItem('username', form.value.name);
          localStorage.setItem('useremail', form.value.email);
          localStorage.setItem('userphone', form.value.phone);
          this._authService.userName.next(localStorage.getItem('username'));
          this._authService.userEmail.next(localStorage.getItem('useremail'));
          this.loading = false;
          this.successMsg=true;
          
       },
        error: (err) => {
          this.successMsg=false
          console.log(err);
          this.errorMsg = err.error.errors.msg;
          this.loading = false;
           
          },
      });
    } else {
      this.notValidForm = true;
    }
  }
}

