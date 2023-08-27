import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify-reset-code',
  templateUrl: './verify-reset-code.component.html',
  styleUrls: ['./verify-reset-code.component.css'],
})
export class VerifyResetCodeComponent {
  loading: boolean = false;
  notValidForm: boolean = false;
  errorMsg:string=''

  constructor(private _authService: AuthService, private _router: Router) {}

  verifyCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl('', [Validators.required]),
  });

  verifyCode(form: FormGroup) {
    if (form.valid) {
      this.loading = true;
      this._authService.verifyResetCode(form.value).subscribe({
        next: (res) => {
          console.log(res);
          this.loading = false;
          this._router.navigate(['/reset-password']);
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
