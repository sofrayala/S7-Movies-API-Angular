import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should be invalid when form is empty', () => {
  //   expect(component.registrationForm.valid).toBeFalse();
  // });

  // it('should be invalid if passwords do not match', () => {
  //   component.registrationForm.setValue({
  //     name: 'Test',
  //     email: 'test@example.com',
  //     password: '12345',
  //     confirmPassword: '54321',
  //   });
  //   expect(component.registrationForm.valid).toBeFalse();
  //   expect(component.registrationForm.errors?.['mismatch']).toBeTrue();
  // });

  // it('should be valid if all fields are correct and passwords match', () => {
  //   component.registrationForm.setValue({
  //     name: 'Test',
  //     email: 'test@example.com',
  //     password: '12345',
  //     confirmPassword: '12345',
  //   });
  //   expect(component.registrationForm.valid).toBeTrue();
  // });
});
