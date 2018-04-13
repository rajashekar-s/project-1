import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the JobDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-detail',
  templateUrl: 'job-detail.html',
})
export class JobDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobDetailPage');
  }
  moreOptions() {

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Additional Options',
      
      buttons: [
        {
          text: 'Save Job',
          
        },
        {
          text: 'Share'
        },
        {
          text: 'Flag as Spam',
          role: 'destructive'
        },
        {
          text: 'cancel',
          role: 'cancel'
        }

      ]
    });
    actionSheet.present();

  }

}
