/* eslint-disable radix */
import { Component } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { RestService } from './services/rest.service';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { CoachService } from './services/coach.service';
import { PlayerService } from './services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  identy: any;
  // oneSignalAppId = '33f6031f-46c8-4ee0-bb26-f857eea1e851';
  // oneSignalFirebaseId = '809200048320';
  oneSignalAppId = 'f629e689-5418-4d75-ab66-6e5dfb1d5226';
  oneSignalFirebaseId = '155437973416';
  userId: any;
  constructor(
    private oneSignal: OneSignal,
    public navCtrl: NavController,
    private router: Router,
    public platform: Platform,
    public toastController: ToastController,
    public rest: RestService,
    public alertController: AlertController,
    public playerService: PlayerService,
    public coachService: CoachService
  ) {

    this.pushNotification();

    this.userId = JSON.parse(localStorage.getItem('user'));
    console.log('userdetails====', this.userId);

    this.oneSignal.setLogLevel({ logLevel: 6, visualLevel: 2 });
    this.oneSignal.startInit(this.oneSignalAppId, this.oneSignalFirebaseId);
    this.oneSignal.endInit();
    this.oneSignal.getIds().then((identity) => {
      console.log('one signal id device id in app component,', identity);
      localStorage.setItem('deviceID', identity.userId);
    });

  }

  pushNotification() {
    this.oneSignal.startInit(this.oneSignalAppId, this.oneSignalFirebaseId);

    this.oneSignal.inFocusDisplaying(
      this.oneSignal.OSInFocusDisplayOption.Notification
    );

    this.oneSignal.handleNotificationReceived().subscribe(async (data) => {
      this.showNotificaton(data.payload.body);
      const user = JSON.parse(localStorage.getItem('user'));
      const accountType = localStorage.getItem('accountType');
      if (accountType === 'PLAYER') {
        if (data.payload.additionalData.type === 'add_team') {
          this.playerService.getTeamRequest(user.users_id);
        }
        if (data.payload.additionalData.type === 'survey_received') {
          this.playerService.surveyReady();
        }
      }
      if (accountType === 'COACH') {
        if (data.payload.additionalData.type === 'invite_response') {
          const alert = await this.alertController.create({
            cssClass: 'requestAcceptReject',
            message: data.payload.body,
            buttons: [
              {
                text: 'Ok',
                cssClass: 'btn_ok',
              },
            ],
          });

          await alert.present();
          await alert.onDidDismiss();
        }
      }
    });

    this.oneSignal.handleNotificationOpened().subscribe((data) => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (parseInt(user.roles_id) === 2) {
        if (
          data.notification.payload.additionalData.type === 'survey_response'
        ) {
          this.router.navigate(['view-answers']);
        }
      }
    });

    this.oneSignal.endInit();
  }
  async showNotificaton(msg: string) {
    const toast = await this.toastController.create({
      header: 'AW-Football Notification',
      message: msg,
      color: 'light',
      duration: 2000,
      position: 'top',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
        },
      ],
    });
    await toast.present();
    await toast.onDidDismiss();
  }
}
