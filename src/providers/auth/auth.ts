import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

import { User } from '../../models/model';

@Injectable()
export class AuthProvider {
  
  private authState: Observable<firebase.User>
  private currentUser: firebase.User = null;

  constructor(private afAuth: AngularFireAuth) {
    
    this.authState = this.afAuth.authState;
    
    this.authState.subscribe(user => {
      if(user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  }

  getAuthState() {
    return this.authState;
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

  userState(){
    return this.currentUser;
  }

  sendVerfication(){
    return this.currentUser.sendEmailVerification();
  }

}
