import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  loading: boolean = false;
  errorMsg: string = '';
  notValidForm: boolean = false;
  hide = true;


  constructor(private _authService: AuthService, private _router: Router) {}

  signInForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/),
    ]),
  });

  signIn(form: FormGroup) {
    if (form.valid) {
      this.loading = true;
      this._authService.signIn(form.value).subscribe({
        next: (res) => {
          this.loading = false;
          localStorage.setItem('userToken', res.token);
          localStorage.setItem('useremail', res.user.email);
          localStorage.setItem('username', res.user.name);
          this._authService.userName.next(localStorage.getItem('username'));
         this._authService.getUserData();
          this._router.navigate(['/home']);

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
}
