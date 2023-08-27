import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  loading: boolean = false;
  errorMsg: string = '';
  notValidForm: boolean = false;
  hide:boolean=true

  constructor(private _authService: AuthService, private _router: Router) {}

  signUpForm: FormGroup = new FormGroup(
    {
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z0-9]{6,}$/),
      ]),
      rePassword: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z0-9]{6,}$/),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^01[0125][0-9]{8}$/),
      ]),
    },
    { validators: this.validateRePassword }
  );

  signUp(form: FormGroup) {
    if (form.valid) {
    this.loading = true;
      this._authService.signUp(form.value).subscribe({
        next: (data) => {
          this.loading = false;
          this._router.navigate(['/signin']);
        },
        error: (err) => {
          this.errorMsg = err.error.message;
          this.loading = false;
        },
      });
    } else {
      this.notValidForm = true;
    }
  }

  validateRePassword(signUpForm: any) {
    let passwordControl = signUpForm.get('password');
    let repasswordControl = signUpForm.get('rePassword');

    if (passwordControl.value == repasswordControl.value) {
      return null; // no errors
    } else {
      repasswordControl.setErrors({
        repasswordNotMatch: 'repassword is not match password',
      });
      return { repasswordNotMatch: 'repassword is not match password' };
    }
  }
}
