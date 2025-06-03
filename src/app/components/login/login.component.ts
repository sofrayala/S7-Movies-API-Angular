import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../../services/auth.service';
import { RouterLink, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [HeaderComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  errorMessage = '';

  loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  onSubmit(): void {
    if (this.loginForm.invalid) return;
    const { email, password } = this.loginForm.getRawValue();

    this.authService.login(email, password).subscribe({
      next: () => {
        const redirectUrl = sessionStorage.getItem('redirectAfterLogin');
        if (redirectUrl) {
          sessionStorage.removeItem('redirectAfterLogin');
          this.router.navigateByUrl(redirectUrl);
        } else {
          this.router.navigateByUrl('/movies');
        }
      },
      error: (error) => {
        console.log(error.code);
        if (error && error.code === 'auth/invalid-credential') {
          this.errorMessage =
            'User or password not valid. If you are not registered yet, please register first';
        } else {
          this.errorMessage = 'Log in error. Please try again later';
        }
      },
    });
  }
}
