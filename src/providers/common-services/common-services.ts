import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';


@Injectable()
export class CommonServicesProvider {

  constructor(private alertCtrl: AlertController) {
  }

  showBasicAlert(title: string, message: string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
}
