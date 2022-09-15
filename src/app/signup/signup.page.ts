/* eslint-disable radix */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RestService } from '../services/rest.service';
import { NavController } from '@ionic/angular';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  userType: any;
  identy: any;
  // signalAppId = '33f6031f-46c8-4ee0-bb26-f857eea1e851';
  // firebaseId = '809200048320';
  oneSignalAppId = 'f629e689-5418-4d75-ab66-6e5dfb1d5226';
  oneSignalFirebaseId = '155437973416';
  phoneId = '';
  email = '';
  username = '';
  password = '';
  isLoading = false;
  emailError = {
    status: false,
    message: '',
  };
  usernameError = {
    status: false,
    message: '',
  };
  passwordError = {
    status: false,
    message: '',
  };
  error = {
    status: false,
    message: '',
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rest: RestService,
    public alertController: AlertController,
    public navCtrl: NavController,
    public oneSignal: OneSignal,
    private platform: Platform
  ) {
    this.email = '';
    this.username = '';
    this.password = '';
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.userType = this.router.getCurrentNavigation().extras.state.user;
      }
    });

    // this.oneSignal.setLogLevel({ logLevel: 6, visualLevel: 2 });
    // this.oneSignal.startInit(this.oneSignalAppId, this.oneSignalFirebaseId);
    // this.oneSignal.endInit();
    // this.oneSignal.getIds().then((identity) => {
    //   console.log('one signal id,', identity);

    //   this.phoneId = identity.userId;
    //   localStorage.setItem('deviceID', identity.userId);
    // });
  }
  ngOnInit() {
    this.email = '';
    this.username = '';
    this.password = '';
    // this.phoneId = localStorage.getItem('deviceID');
  }
  loginPage() {
    const navigationExtras: NavigationExtras = {
      state: {
        user: this.userType,
      },
    };
    this.navCtrl.navigateBack(['signin'], navigationExtras);
  }
  signup() {
    this.phoneId = localStorage.getItem('deviceID');
    if (this.email && this.username && this.password) {
      if (!this.validateEmail(this.email)) {
        this.emailError.status = true;
        this.emailError.message = 'Invalid Email address.';
        setTimeout(() => {
          this.emailError.status = false;
          this.emailError.message = '';
        }, 3000);
        return;
      }

      if (this.userType === 'COACH') {
        this.isLoading = true;
        this.rest
          .signUp({
            requestType: 'coach',
            email: this.email,
            username: this.username,
            password: this.password,
            deviceID: this.phoneId,
          })
          .subscribe(
            async (data: any) => {
              if (data.status === 'error') {
                this.isLoading = false;
                this.error.status = true;
                this.error.message = data.msg;
                setTimeout(() => {
                  this.error.status = false;
                  this.error.message = '';
                }, 3000);
                return;
              } else if (data.status === 'success') {
                localStorage.setItem('user', JSON.stringify(data.users_data));
                localStorage.setItem('accountType', this.userType);
                this.isLoading = false;
                const alert = await this.alertController.create({
                  cssClass: 'registeredAlert',
                  message: 'Registered successfully.',
                  backdropDismiss: false,
                  buttons: [
                    {
                      text: 'Ok',
                      handler: () => {
                        this.email = '';
                        this.username = '';
                        this.password = '';
                        if (Object.keys(localStorage).includes('user')) {
                          if (parseInt(data.users_data.roles_id) === 3) {
                            if (this.userType === 'COACH') {
                              this.navCtrl.navigateRoot('/home-coach');
                            }
                            if (this.userType === 'PLAYER') {
                              this.navCtrl.navigateRoot('/player-survey');
                            }
                          }
                          if (parseInt(data.users_data.roles_id) === 2) {
                            this.navCtrl.navigateRoot('/home-coach');
                          } else {
                            this.error.status = true;
                            this.error.message = 'Something went wrong!';
                            setTimeout(() => {
                              this.error.status = false;
                              this.error.message = '';
                            }, 3000);
                          }
                        }
                        this.navCtrl.navigateRoot('/home-coach');
                      },
                      cssClass: 'btn_ok',
                    },
                  ],
                });

                await alert.present();
                await alert.onDidDismiss();
              } else {
                this.isLoading = false;
                this.error.status = true;
                this.error.message = 'Something went wrong!';
                setTimeout(() => {
                  this.error.status = false;
                  this.error.message = '';
                }, 3000);
              }
            },
            (error) => {
              this.isLoading = false;
              this.error.status = true;
              this.error.message = 'Something went wrong!';
              setTimeout(() => {
                this.error.status = false;
                this.error.message = '';
              }, 3000);
            }
          );
      } else if (this.userType === 'PLAYER') {
        this.isLoading = true;
        this.rest
          .signUp({
            requestType: 'player',
            username: this.username,
            email: this.email,
            password: this.password,
            deviceID: this.phoneId,
          })
          .subscribe(
            async (data: any) => {
              console.log('signup response check====', data);

              if (data.status === 'error') {
                this.isLoading = false;
                this.error.status = true;
                this.error.message = data.msg;
                setTimeout(() => {
                  this.error.status = false;
                  this.error.message = '';
                }, 3000);
                return;
              } else if (data.status === 'success') {
                localStorage.setItem('user', JSON.stringify(data.users_data));
                localStorage.setItem('accountType', this.userType);
                this.isLoading = false;
                const alert = await this.alertController.create({
                  cssClass: 'registeredAlert',
                  message: 'Registered successfully.',
                  backdropDismiss: false,
                  buttons: [
                    {
                      text: 'Ok',
                      handler: () => {
                        this.email = '';
                        this.username = '';
                        this.password = '';
                        if (Object.keys(localStorage).includes('user')) {
                          if (parseInt(data.users_data.roles_id) === 3) {
                            if (this.userType === 'COACH') {
                              this.navCtrl.navigateRoot('/home-coach');
                            }
                            if (this.userType === 'PLAYER') {
                              this.navCtrl.navigateRoot('/player-survey');
                            }
                          }
                          if (parseInt(data.users_data.roles_id) === 1) {
                            this.navCtrl.navigateRoot('/player-survey');
                          } else {
                            this.error.status = true;
                            this.error.message = 'Something went wrong!';
                            setTimeout(() => {
                              this.error.status = false;
                              this.error.message = '';
                            }, 3000);
                          }
                        }
                      },
                      cssClass: 'btn_ok',
                    },
                  ],
                });

                await alert.present();
                await alert.onDidDismiss();
              } else {
                this.isLoading = false;
                this.error.status = true;
                this.error.message = 'Something went wrong!';
                setTimeout(() => {
                  this.error.status = false;
                  this.error.message = '';
                }, 3000);
              }
            },
            (error) => {
              this.isLoading = false;
              this.error.status = true;
              this.error.message = 'Something went wrong!';
              setTimeout(() => {
                this.error.status = false;
                this.error.message = '';
              }, 3000);
            }
          );
      } else {
        this.router.navigate(['home']);
      }

      return;
    }
    if (!this.email) {
      this.emailError.status = true;
      this.emailError.message = 'Email address is required';
    }
    if (!this.username) {
      this.usernameError.status = true;
      this.usernameError.message = 'Username is required';
    }
    if (!this.password) {
      this.passwordError.status = true;
      this.passwordError.message = 'Password is required';
    }
    setTimeout(() => {
      this.emailError.status = false;
      this.emailError.message = '';
      this.usernameError.status = false;
      this.usernameError.message = '';
      this.passwordError.status = false;
      this.passwordError.message = '';
    }, 3000);
  }
  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  back() {
    const navigationExtras: NavigationExtras = {
      state: {
        user: this.userType,
      },
    };
    this.router.navigate(['signin'], navigationExtras);
  }
  setFocusToUsername(el) {
    el.setFocus();
  }
  setFocusToPass(el) {
    el.setFocus();
  }
}
