import { Component } from '@angular/core';
import { DatePipe } from '@angular/common'

import { IonicPage, NavController, Loading, AlertController, LoadingController, MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DatePicker } from '@ionic-native/date-picker';
import { AuthProvider } from '../../providers/auth/auth';
import { CommonServicesProvider } from '../../providers/common-services/common-services';

import { EmailValidator } from '../../validators/email';

import { LoginPage } from '../login/login';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public signupForm: FormGroup;
  public loading: Loading;

  appLogo: string="../../assets/imgs/appLogo.png";

  constructor(public nav: NavController, public authData: AuthProvider, private common: CommonServicesProvider, public formBuilder: FormBuilder, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public menu: MenuController, private datePicker: DatePicker, private datepipe: DatePipe) {
    this.menu = menu;
    this.menu.enable(false, 'myMenu')
    
    this.signupForm = formBuilder.group({
      fullName: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z\\s]*$')])],
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],      
      birthDate: ['', Validators.compose([Validators.required])]
    });
  }

  signupUser(){
    if (!this.signupForm.valid){
      console.log(this.signupForm.value);
    } else {
      this.authData.registerUser(this.signupForm.value.email, this.signupForm.value.password)
      .then(() => {
        this.common.showBasicAlert('Registered successfully!', "Please verify your email id to use services.");        
        this.nav.setRoot(LoginPage);
      }, (error) => {
        this.loading.dismiss().then( () => {
          this.common.showBasicAlert('Error', error.message);        
        });
      });

      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
    }
  }

  chooseDate() {
    let options = {
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
      titleText: "Select Birth Date",
      okText: "Done",
      cancelText: "Cancel"
    }
    this.datePicker.show(options)
      .then((date: Date) => {
        this.signupForm.controls.birthDate.setValue(this.datepipe.transform(date, 'dd-MMM-yyyy'));  
      }
    ).catch((e) => {
      this.signupForm.controls.birthDate.markAsDirty();
    });
  }
}
