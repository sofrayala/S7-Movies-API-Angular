import { Injectable, Inject, signal } from '@angular/core';
import {
  Auth,
  browserSessionPersistence,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  user,
  User,
  UserCredential,
  onAuthStateChanged,
} from '@angular/fire/auth';
import { setPersistence } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // user$: Observable<User | null>;

  // constructor(@Inject('firebase-auth') private firebaseAuth: Auth) {
  //   this.setSessionStoragePersistence();
  //   this.user$ = user(this.firebaseAuth);
  // }

  // private setSessionStoragePersistence(): void {
  //   setPersistence(this.firebaseAuth, browserSessionPersistence);
  // }

  // login(email: string, password: string): Observable<UserCredential> {
  //   return from(signInWithEmailAndPassword(this.firebaseAuth, email, password));
  // }

  // logout(): Observable<void> {
  //   return from(signOut(this.firebaseAuth).then(() => sessionStorage.clear()));
  // }

  // register(email: string, password: string): Observable<UserCredential> {
  //   return from(
  //     createUserWithEmailAndPassword(this.firebaseAuth, email, password)
  //   );
  // }
  user = signal<User | null>(null);

  constructor(@Inject('firebase-auth') private firebaseAuth: Auth) {
    this.setSessionStoragePersistence();
    onAuthStateChanged(this.firebaseAuth, (user) => {
      this.user.set(user);
    });
  }

  private setSessionStoragePersistence(): void {
    setPersistence(this.firebaseAuth, browserSessionPersistence);
  }

  login(email: string, password: string): Observable<UserCredential> {
    return from(
      signInWithEmailAndPassword(this.firebaseAuth, email, password).then(
        (cred) => {
          this.user.set(cred.user);
          return cred;
        }
      )
    );
  }

  logout(): Observable<void> {
    return from(
      signOut(this.firebaseAuth).then(() => {
        this.user.set(null);
        sessionStorage.clear();
      })
    );
  }

  register(
    email: string,
    password: string,
    displayName?: string
  ): Observable<UserCredential> {
    return from(
      createUserWithEmailAndPassword(this.firebaseAuth, email, password).then(
        async (cred) => {
          if (cred.user && displayName) {
            // Optionally set displayName after registration
            await import('firebase/auth').then(({ updateProfile }) =>
              updateProfile(cred.user!, { displayName })
            );
            this.user.set({ ...cred.user, displayName });
          } else {
            this.user.set(cred.user);
          }
          return cred;
        }
      )
    );
  }
}
