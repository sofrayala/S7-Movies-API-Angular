import { CanActivateFn, Router } from '@angular/router';
import { Inject, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(Auth);

  return new Promise<boolean>((resolve) => {
    const unSubscribed = auth.onAuthStateChanged((user) => {
      unSubscribed();
      if (user) resolve(true);
      else {
        sessionStorage.setItem('redirectAfterLogin', state.url);
        router.navigate(['/login']);
        resolve(false);
      }
    });
  });
};
