import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  //toast vetnana para avisar
  //inject
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  registrationForm = this.fb.nonNullable.group(
    {
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required],
    },
    { validators: this.passwordMatchValidator }
  );

  passwordMatchValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const password = group.get('password')?.value;
      const confirmPassword = group.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { mismatch: true };
    };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const { email, password } = this.registrationForm.getRawValue();

      this.authService.register(email, password).subscribe({
        next: () => {
          alert('Registration Successful');
          this.router.navigateByUrl('/home');
        },
        error: (error) => {
          console.error('registration error', error);
          alert('Registration failed');
        },
      });
    } else {
      this.registrationForm.markAllAsTouched();
      alert('Form not valid, please check all fields');
    }
  }
}
