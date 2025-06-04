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
  updateProfile,
  setPersistence,
} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
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
    displayName: string
  ): Observable<UserCredential> {
    return from(
      createUserWithEmailAndPassword(this.firebaseAuth, email, password).then(
        async (cred) => {
          if (cred.user) {
            await updateProfile(cred.user, { displayName });
            this.user.set({ ...cred.user, displayName });
          }
          return cred;
        }
      )
    );
  }
}
