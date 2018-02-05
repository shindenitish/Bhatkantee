import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { HomePage } from '../pages/home/home';
import { ExplorePage } from '../pages/explore/explore';
import { CreatePage } from '../pages//create/create';
import { ProfilePage } from '../pages//profile/profile';
import { NotificationsPage } from '../pages//notifications/notifications';

import { AboutUsPage } from '../pages/about-us/about-us';
import { HelpPage } from '../pages/help/help';
import { SettingsPage } from '../pages/settings/settings';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HeaderComponent } from '../components/header/header';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';

//import { AngularFirestoreModule } from 'angularfire2/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDp5nn2AHsJyHY_0vbm0WPYlf8C9T5ocBM",
  authDomain: "friendlychat-ebc02.firebaseapp.com",
  databaseURL: "https://friendlychat-ebc02.firebaseio.com",
  projectId: "friendlychat-ebc02",
  storageBucket: "friendlychat-ebc02.appspot.com",
  messagingSenderId: "447128622236"
};

@NgModule({
  declarations: [
    MyApp,
    
    //Tabs
    TabsPage,
    HomePage,
    ExplorePage,
    CreatePage,
    ProfilePage,
    NotificationsPage,
    
    //MENU
    AboutUsPage,
    SettingsPage,
    HelpPage,

    //Login
    LoginPage,
    RegisterPage,
    ResetPasswordPage,

    //Header
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    //AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    TabsPage,
    HomePage,
    ExplorePage,
    CreatePage,
    ProfilePage,
    NotificationsPage,

    AboutUsPage,
    SettingsPage,
    HelpPage,

    LoginPage,
    RegisterPage,
    ResetPasswordPage,

    HeaderComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider
  ]
})
export class AppModule {}
