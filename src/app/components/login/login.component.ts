import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../../services/auth.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  onSubmit(): void {
    if (this.loginForm.invalid) return;
    const { email, password } = this.loginForm.getRawValue();

    this.authService.login(email, password).subscribe({
      next: () => {
        const redirectUrl = sessionStorage.getItem('redirectAfterlogin');
        if (redirectUrl) {
          sessionStorage.removeItem('redirectAfterLogin');
          this.router.navigateByUrl(redirectUrl);
        } else {
          this.router.navigateByUrl('/movies');
        }
      },
      error: (error) => {},
    });
  }
}

//dentro del subscribe:
// next: (UserCredential) => {
//   this.router.navigateByUrl('/home');
//   console.log('Logged in:', UserCredential);
// },
// error: (error) => {
//   console.error('Email login error', error);
//   alert(error.message);
// }
