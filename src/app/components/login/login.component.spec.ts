import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when form is empty', () => {
    expect(component.loginForm.valid).toBeFalse();
  });

  it('should be valid with correct email and password', () => {
    component.loginForm.setValue({
      email: 'test@example.com',
      password: '12345',
    });
    expect(component.loginForm.valid).toBeTrue();
  });

  it('should be invalid with correct email and password', () => {
    component.loginForm.setValue({
      email: 'test@example.com',
      password: '12345',
    });
    expect(component.loginForm.valid).toBeFalse();
  });

  it('should be invalid with short password', () => {
    component.loginForm.setValue({
      email: 'test@example.com',
      password: '1',
    });
    expect(component.loginForm.valid).toBeFalse();
  });
});
