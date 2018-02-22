import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import firebase from 'firebase/app';

@Injectable()
export class AuthProvider {
  constructor(private afAuth: AngularFireAuth) {
  }

  loginUser(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  resetPassword(email: string): Promise<void> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  registerUser(email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  authenticated() : boolean {
    if (firebase.auth().currentUser == null){
      return false;
    }
    else{
      return true;
    }
  }

}
