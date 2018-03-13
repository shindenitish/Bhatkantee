import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { LoginPage } from '../login/login';

import { AuthProvider } from '../../providers/auth/auth';
import { CommonServicesProvider } from '../../providers/common-services/common-services';

import { User } from '../../models/model';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  private user: User={
    userId:'',
    fullName:'Loading..',
    email:'Loading..',
    birthDate: null,
    gender: ''
  };

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  private authService: AuthProvider,
  private common: CommonServicesProvider,
  private afs:AngularFirestore) {
    this.getUserInfo();
  }

  ionViewCanEnter(){
    if(this.authService.userState() == null){
      return false;
    }
    else{
      return true;
    }
  }

  getUserInfo(){

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${this.authService.userState().uid}`);

    userRef.ref.onSnapshot(doc => {
      if(doc.exists) {
        //console.log("Document data:", doc.data());
        this.user.fullName= doc.data().fullName;
        this.user.email = doc.data().email;
        this.user.gender = doc.data().gender;
        this.user.birthDate= doc.data().birthDate.toString('dd-MMM-yyyy');
        this.user.userId = doc.data().userId;
      } else {
        console.log("No such document!");
      }
    },error => {
        console.log("Error getting document:", error);
    });
  }

  signOut(){       
    this.authService.logoutUser().then( authData => {
      this.navCtrl.setRoot(LoginPage);
    }, error => {
        this.common.showBasicAlert('Error', error.message);        
    });
  }
}
