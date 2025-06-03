// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { LoginComponent } from './login.component';
// import { ReactiveFormsModule } from '@angular/forms';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [LoginComponent, ReactiveFormsModule],
//     }).compileComponents();

//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create the login component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should be valid with correct email and password', () => {
//     component.loginForm.setValue({
//       email: 'test@example.com',
//       password: '123456',
//     });
//     expect(component.loginForm.valid).toBeTrue();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { Component } from '@angular/core';

// ✅ Stub for app-header (used in the template)
@Component({
  selector: 'app-header',
  template: '',
})
class MockHeaderComponent {}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthService: any;
  let mockRouter: any;

  beforeEach(async () => {
    mockAuthService = {
      login: jasmine.createSpy('login').and.returnValue(of({})),
    };
    mockRouter = {
      navigateByUrl: jasmine.createSpy('navigateByUrl'),
    };

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterModule],
      declarations: [LoginComponent, MockHeaderComponent],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: {} },
        { provide: 'firebase-auth', useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the login component', () => {
    expect(component).toBeTruthy();
  });

  it('should be valid with correct email and password', () => {
    component.loginForm.setValue({
      email: 'test@example.com',
      password: '123456',
    });

    expect(component.loginForm.valid).toBeTrue();
  });

  it('should call login and navigate to /movies on successful login', () => {
    component.loginForm.setValue({
      email: 'test@example.com',
      password: '123456',
    });

    component.onSubmit();

    expect(mockAuthService.login).toHaveBeenCalledWith(
      'test@example.com',
      '123456'
    );
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/movies');
  });
});
