import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, LoadingController, Loading, AlertController, MenuController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { ResetPasswordPage } from '../reset-password/reset-password';

import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';
import { CommonServicesProvider } from '../../providers/common-services/common-services';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  loading: Loading;
  appLogo: string="../../assets/imgs/appLogo.png";

  constructor(private navCtrl: NavController,  
  private alertCtrl: AlertController, 
  private loadingCtrl: LoadingController, 
  private menu:MenuController, 
  private formBuilder: FormBuilder,
  private authData: AuthProvider,
  private common: CommonServicesProvider) {
    this.menu = menu;
    this.menu.enable(false, 'myMenu')

    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  goToResetPassword(){
    this.navCtrl.push(ResetPasswordPage);
  }
  
  createAccount(){
    this.navCtrl.push(RegisterPage);
  }

  loginUser(){
    if(!this.loginForm.valid){

      console.log(this.loginForm.value);
    } else {
      this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
      .then( authData => {
        this.navCtrl.setRoot(TabsPage);
      }, error => {
        this.loading.dismiss().then(() => {
          this.common.showBasicAlert('Error', error.message);        
        });
      });
  
      this.loading = this.loadingCtrl.create({ dismissOnPageChange: true, });
      this.loading.present();
    }
  }
}
