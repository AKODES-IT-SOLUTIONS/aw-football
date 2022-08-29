/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RestService } from './rest.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  getID: any;
  displaySurveyStatus = false;
  displaySurveys = true;
  open = false;
  close = false;
  isLoading = false;
  player: any;
  sendingSurveyResponse = false;
  numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  yesNoOptions = ['YES', 'NO'];
  surveys = 0;
  surveyToAnswers = [];
  numberOfSurvey: any;
  coachesByQuestions = [];
  sendResponse: any;
  surveyName = '';
  survey_response = [];
  allInvites = [];
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public rest: RestService,
    public alertController: AlertController,
    public navCtrl: NavController
  ) {}
  public send() {
    this.sendingSurveyResponse = true;
    this.rest
      .sendSurveyResponse({
        requestType: 'surveys_response',
        survey_response: this.survey_response,
        ...this.sendResponse,
      })
      .subscribe(async (data: any) => {
        this.sendingSurveyResponse = false;
        if (data.status === 'success') {
          const alert = await this.alertController.create({
            cssClass: 'sendSurvey',
            message: 'Your Survey is Forwarded.',
            backdropDismiss: false,
            buttons: [
              {
                text: 'Ok',
                handler: () => {
                  this.survey_response = [];
                  this.displaySurvey();
                },
                cssClass: 'btn_ok',
              },
            ],
          });

          await alert.present();
          await alert.onDidDismiss();
        } else {
          const alert = await this.alertController.create({
            cssClass: 'sendSurvey',
            message: 'Something went wrong!',
            backdropDismiss: false,
            buttons: [
              {
                text: 'Ok',
                handler: () => {
                  this.survey_response = [];
                  this.displaySurvey();
                },
                cssClass: 'btn_ok',
              },
            ],
          });

          await alert.present();
          await alert.onDidDismiss();
        }
      });
  }
  public logout() {
    this.rest.logout({
      users_id: this.player.users_id,
    });
    localStorage.removeItem('user');
    localStorage.removeItem('rememberMe');
    localStorage.removeItem('team');
    localStorage.removeItem('accountType');
    this.rest.authState.next(false);
    this.navCtrl.navigateRoot('/home');
  }
  public getSurvey(id) {
    console.log('FORM NOTI', this.displaySurveyStatus);
    this.isLoading = true;
    this.rest
      .getSurvey({
        requestType: 'surveys_list',
        player_id: id,
      })
      .subscribe((data: any) => {
        console.log('surveys_list',data);
        this.isLoading = false;
        if (data.available_surveys.length === 0) {
          this.displaySurveyStatus = true;
          this.displaySurveys = false;
        } else {
          this.numberOfSurvey = data.available_surveys.length;
          this.coachesByQuestions = data.available_surveys;

          this.displaySurvey();
        }
      });
  }
  public displaySurvey() {
    if (this.surveys >= this.numberOfSurvey) {
      this.surveyName = '';
      this.surveyToAnswers = [];
      this.displaySurveyStatus = true;
      this.displaySurveys = false;
      // this.isLoading = false;
    } else {
      if (this.coachesByQuestions[this.surveys].survey_response === 'No') {
        this.sendResponse = {
          coach_id: this.coachesByQuestions[this.surveys].coach_id,
          player_id: this.player.users_id,
          surveys_id: this.coachesByQuestions[this.surveys].surveys_id,
        };
        this.surveyName = this.coachesByQuestions[this.surveys].survey_name;
        this.surveyToAnswers =
          this.coachesByQuestions[this.surveys].questions_list;
        this.surveys++;
        console.log('displaySurvey',this.surveyToAnswers);
      } else {
        this.surveys++;
        this.displaySurvey();
      }
    }
  }
  public getAnsByChild(questionAns) {
    const index = this.survey_response.findIndex(
      (e) => e.question_id === questionAns.question.question_id
    );

    if (index === -1) {
      this.survey_response.push({
        question_id: questionAns.question.question_id,
        answer: questionAns.answer,
      });
    } else {
      this.survey_response[index].answer = questionAns.answer;
    }
  }

  public getQuestionID(id) {
    if (this.getID === id) {
      this.getID = null;
    } else {
      this.getID = id;
    }
  }
  public doRefresh(event) {
    setTimeout(() => {
      this.displaySurveyStatus = false;
      this.displaySurveys = true;
      this.allInvites = [];
      this.surveys = 0;
      this.coachesByQuestions = [];
      this.surveyToAnswers = [];
      this.survey_response = [];
      this.player = JSON.parse(localStorage.getItem('user'));
      console.log('userdata',this.player);
      this.getTeamRequest(this.player.users_id);
      this.getSurvey(this.player.users_id);
      event.target.complete();
    }, 1000);
  }
  public async getTeamRequest(id) {
    this.rest
      .getTeamRequest({
        requestType: 'get_team_invites',
        player_id: id,
      })
      .subscribe(async (data: any) => {
        if (data.status === 'success') {
          this.allInvites = data.allInvites;
        }
        if (this.allInvites.length > 0) {
          let invites = 0;
          for (invites; invites < this.allInvites.length; invites++) {
            const alert = await this.alertController.create({
              cssClass: 'requestAlert',
              message: `${this.allInvites[invites].coach_name} want to add you to his team!`,
              buttons: [
                {
                  text: 'ACCEPT',
                  handler: () => {
                    this.sendInviteResponse(
                      'accepted',
                      this.allInvites[invites].teams_id
                    );
                  },
                  cssClass: 'btn_accept',
                },
                {
                  text: 'REJECT',
                  handler: () => {
                    this.sendInviteResponse(
                      'Rejected',
                      this.allInvites[invites].teams_id
                    );
                  },
                  cssClass: 'btn_reject',
                },
              ],
            });

            await alert.present();
            await alert.onDidDismiss();
          }
        }
      });
  }
  public sendInviteResponse(res, teamId) {
    this.rest
      .inviteResponse({
        requestType: 'accept_invite',
        teams_id: teamId,
        response: res,
      })
      .subscribe(async (data: any) => {
        console.log(data);
      });
  }
  public surveyReady() {
    this.displaySurveyStatus = false;
    this.displaySurveys = true;
    this.allInvites = [];
    this.surveys = 0;
    this.coachesByQuestions = [];
    this.surveyToAnswers = [];
    this.survey_response = [];
    this.player = JSON.parse(localStorage.getItem('user'));
    this.getTeamRequest(this.player.users_id);
    this.getSurvey(this.player.users_id);
  }
  public sendDeviceID() {
    const deviceId = localStorage.getItem('deviceID');
    const user = JSON.parse(localStorage.getItem('user'));
    this.rest
      .sendDeviceId({
        deviceID: deviceId,
        users_id: user.users_id,
      })
      .subscribe(async (data: any) => {
        console.log(data);
      });
  }
}
