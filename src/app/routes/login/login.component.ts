import { Component, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

import { LoginApiService } from '@shared/apis/login-api.service';
import { AuthService } from '@shared/services/auth/auth.service';

import { LoginForm } from './models/form';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  protected formGroup: FormGroup<LoginForm>;
  protected loading: boolean = false;

  constructor(
    private authService: AuthService,
    private destroyRef$: DestroyRef,
    private formBuilder: FormBuilder,
    private loginApiService: LoginApiService,
    private router: Router,
  ) {
    this.formGroup = this.formBuilder.group<LoginForm>({
      email: this.formBuilder.nonNullable.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.nonNullable.control('', [Validators.required]),
    });
  }


  protected onSubmit() {
    this.formGroup.markAsTouched();

    if (!this.formGroup.valid){
      return;
    }

    this.loading = true;

    this.loginApiService.login(this.formGroup.getRawValue())
      .pipe(
        takeUntilDestroyed(this.destroyRef$),
        finalize(() => this.loading = false),
      )
      .subscribe(
        (token) => {
          this.authService.setCookie(token, 1);
          this.router.navigate(['home']);
        }
      );
  }
}
