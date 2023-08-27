import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  loading: boolean = false;
  errorMsg: string = '';
  successMsg: string = '';
  notValidForm: boolean = false;

  constructor(private _authService: AuthService, private _router: Router) {}

  forgotForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  forgotPassword(form: FormGroup) {
    if (form.valid) {
      this.loading = true;
      this._authService.forgotPassword(form.value).subscribe({
        next: (data) => {
          this.loading = false;
          this.successMsg = data.message;
          this._router.navigate(['/Verify-Reset-Code']);

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
