/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { RestService } from '../services/rest.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-coach',
  templateUrl: './home-coach.page.html',
  styleUrls: ['./home-coach.page.scss'],
})
export class HomeCoachPage implements OnInit {
  subscribe: any;
  coach: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rest: RestService,
    public navCtrl: NavController
  ) {
    this.sendDeviceId();
  }
  sendDeviceId() {
    const deviceId = localStorage.getItem('deviceID');
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(deviceId);
    console.log(user.users_id);
    this.rest
      .sendDeviceId({
        deviceID: deviceId,
        users_id: user.users_id,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
  logout() {
    this.rest.logout({
      users_id: this.coach.users_id,
    });
    localStorage.removeItem('user');
    localStorage.removeItem('rememberMe');
    localStorage.removeItem('team');
    localStorage.removeItem('accountType');
    this.rest.authState.next(false);
    this.navCtrl.navigateRoot('/home');
  }
  gotoTeam() {
    this.navCtrl.navigateForward('/your-team');
  }
  gotoCreateSurvey() {
    this.navCtrl.navigateForward('/create-survey');
  }
  gotoViewAnswers() {
    this.navCtrl.navigateForward('/view-answers');
  }
  ngOnInit() {
    this.coach = JSON.parse(localStorage.getItem('user'));
  }
}
