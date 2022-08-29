import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-view-answers',
  templateUrl: './view-answers.page.html',
  styleUrls: ['./view-answers.page.scss'],
})
export class ViewAnswersPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public navCtrl: NavController
  ) {}
  gotoP2P() {
    this.navCtrl.navigateForward('/player2player');
  }
  gotoQ2Q() {
    this.navCtrl.navigateForward('/question2question');
  }
  back() {
    this.navCtrl.navigateRoot('/home-coach');
    this.navCtrl.navigateForward('/home-coach');
  }
  ngOnInit() {}
}
