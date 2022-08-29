/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestService } from '../services/rest.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-player2player',
  templateUrl: './player2player.page.html',
  styleUrls: ['./player2player.page.scss'],
})
export class Player2playerPage implements OnInit {
  selectedSurvey: any;
  displayOption = false;
  displaySpinner = false;
  isLoading = true;
  coach: any;
  surveyAnswer = [];
  displayPlayer = 0;
  surveyList = [];
  survey = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public navCtrl: NavController,
    private rest: RestService
  ) {
    this.displayPlayer = 0;
    this.surveyList = [];
    this.survey = '';
    this.surveyAnswer = [];
  }
  back() {
    this.navCtrl.navigateForward('/view-answers');
  }
  nextPlayer() {
    this.displayPlayer++;
    if (this.displayPlayer === this.surveyAnswer.length) {
      this.displayPlayer = 0;
    }
  }
  previousPlayer() {
    this.displayPlayer--;
    if (this.displayPlayer === -1) {
      this.displayPlayer = this.surveyAnswer.length - 1;
    }
  }
  toggleSelect() {
    if (!this.isLoading) {
      this.displayOption = !this.displayOption;
    }
  }
  selectSurvey(survey) {
    console.log('surveyssss',survey);
    if (survey.type) {
      this.displayOption = !this.displayOption;
      return;
    }
    this.selectedSurvey = survey;
    this.surveyAnswer = [];
    this.survey = survey.survey_name;
    this.displayOption = !this.displayOption;
    this.getAnswers(survey.surveys_id);
  }
  getAnswers(surveyID) {
    console.log('surveyssss ID',surveyID);
    this.displaySpinner = true;
    this.rest
      .getPlayersAnswer({
        requestType: 'playerToplayer',
        survey_id: surveyID,
      })
      .subscribe((data: any) => {
        console.log('data',data);
        this.displaySpinner = false;
        if (data.status === 'success') {
          this.surveyAnswer = data.players_response;
        } else {
          this.surveyAnswer = [];
        }
      });
  }
  getCoachSurvey(id) {
    console.log('coach id',id)
    this.rest
      .getCoachSurvey({
        requestType: 'coachs_surveys',
        coach_id: id,
      })
      .subscribe(
        (data: any) => {
          console.log('coach id related data',data);
          this.isLoading = false;
          if (data.status === 'success') {
            this.surveyList = data.your_survey;
          } else {
            this.surveyList.push({
              survey_name: 'No survey found!',
              type: true,
            });
          }
        },
        (error) => {
          this.isLoading = false;
        }
      );
  }
  doRefresh(event) {
    setTimeout(() => {
      this.getAnswers(this.selectedSurvey.surveys_id);
      event.target.complete();
    }, 1000);
  }
  ngOnInit() {
    this.displayPlayer = 0;
    this.surveyList = [];
    this.survey = '';
    this.surveyAnswer = [];
    this.coach = JSON.parse(localStorage.getItem('user'));
    this.getCoachSurvey(this.coach.users_id);
  }
}
