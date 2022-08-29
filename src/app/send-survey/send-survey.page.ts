/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RestService } from '../services/rest.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-send-survey',
  templateUrl: './send-survey.page.html',
  styleUrls: ['./send-survey.page.scss'],
})
export class SendSurveyPage implements OnInit {
  sendingSurvey = false;
  survey=[];
  isLoading = true;
  coach = JSON.parse(localStorage.getItem('user'));
  displayInput = false;
  team = [];
  selectedPlayers = [];
  playerSelectError = {
    status: false,
    message: '',
  };
  error = {
    status: false,
    message: '',
  };
  totaltime:any;
  questions_list:any;
  survey_name:any;
  surveyarray=[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public alertController: AlertController,
    private rest: RestService,
    public navCtrl: NavController
  ) {
    this.totaltime = this.route.snapshot.params["time"];
    console.log('totaltime',this.totaltime);
    // this.survey_name = this.route.snapshot.params["survey_name"];
    // console.log('survey_name',this.survey_name);

    // this.questions_list = JSON.parse(this.route.snapshot.params["questions_list"])
    // console.log('questions_list',this.questions_list);

    this.route.queryParams.subscribe((params) => {
      console.log('details',params)
      if (this.router.getCurrentNavigation().extras.state) {
        this.survey =
          this.router.getCurrentNavigation().extras.state.selectedQuestions;
          console.log('survey question in constructor',this.survey)
          this.totaltime= this.router.getCurrentNavigation().extras.state.time;
          console.log('survey time',this.totaltime)
      } else {
        this.router.navigate(['create-survey']);
      }
    });
  }
  addPlayers(player, checkbox) {
    console.log('players',player)
    if (checkbox.detail.checked) {
      this.selectedPlayers.push({
        player_id: player.users_id,
        user_name: player.user_name,
      });
      console.log('selectedPlayers',this.selectedPlayers);
    } else {
      this.selectedPlayers = this.selectedPlayers.filter(
        (pl) => pl.player_id !== player.users_id
      );
    }
  }
  getPlayers() {
    this.rest
      .getPlayers({
        requestType: 'get_player',
        coach_id: this.coach.users_id,
      })
      .subscribe((data: any) => {
        console.log('players',data);
        if (data.status === 'Error') {
          this.team = [];
          this.isLoading = false;
          for (const player of data.team) {
            if (player.status === 'Active') {
              this.team.push(player);
            }
          }
        } else {
          this.team = [];
          this.isLoading = false;
          for (const player of data.team) {
            if (player.status === 'Active') {
              this.team.push(player);
            }
          }
        }
      });
  }
  send() {
    if (this.selectedPlayers.length === 0) {
      this.playerSelectError.status = true;
      this.playerSelectError.message = 'Please select players!';
      setTimeout(() => {
        this.playerSelectError.status = false;
        this.playerSelectError.message = '';
      }, 3000);
    } else {
      this.sendingSurvey = true;
      if(this.survey){
        if(this.survey.length>=1){
          let interval=0;
          let that = this;
         // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
         function sendRequestForArray(survey){
           console.log('sendRequestForArray run');
            that.rest
            .sendSurvey({
              requestType: 'send_saved_surveys',
              ...survey,
              players_list: that.selectedPlayers,
              coach_id: that.coach.users_id,

            })
            .subscribe(
              async (data: any) => {
                interval++;
                if(interval === that.survey.length){
                  console.log('survey send data',data);
                  that.sendingSurvey = false;
                  const alert = await that.alertController.create({
                    cssClass: 'sendSurvey',
                    message: 'Your Survey is Forwarded.',
                    backdropDismiss: false,
                    buttons: [
                      {
                        text: 'Ok',
                        handler: () => {
                          that.navCtrl.navigateRoot('/home-coach');
                          that.navCtrl.navigateForward('/home-coach');
                        },
                        cssClass: 'btn_ok',
                      },
                    ],
                  });

                  await alert.present();
                  await alert.onDidDismiss();
                }else{
                  sendRequestForArray(that.survey[interval]);
                }


              },
              async (error) => {
                that.sendingSurvey = false;
                const alert = await that.alertController.create({
                  message: 'Something went wrong!',
                  backdropDismiss: false,
                  buttons: [
                    {
                      text: 'Ok',
                    },
                  ],
                });

                await alert.present();
                await alert.onDidDismiss();
              }
            );
          }
          sendRequestForArray(this.survey[interval]);
        }else{
          this.sendRequest(this.survey);
        }
      }

    }
  }

  back() {
    this.navCtrl.navigateBack('/create-survey');
  }
  ngOnInit() {
    this.getPlayers();
  }
  sendRequest(survey){
    this.rest
    .sendSurvey({
      requestType: 'create_survey',
      ...survey,
      players_list: this.selectedPlayers,
      coach_id: this.coach.users_id,

    })
    .subscribe(
      async (data: any) => {
        console.log('survey send data',data);
        this.sendingSurvey = false;
        const alert = await this.alertController.create({
          cssClass: 'sendSurvey',
          message: 'Your Survey is Forwarded.',
          backdropDismiss: false,
          buttons: [
            {
              text: 'Ok',
              handler: () => {
                this.navCtrl.navigateRoot('/home-coach');
                this.navCtrl.navigateForward('/home-coach');
              },
              cssClass: 'btn_ok',
            },
          ],
        });

        await alert.present();
        await alert.onDidDismiss();
      },
      async (error) => {
        this.sendingSurvey = false;
        const alert = await this.alertController.create({
          message: 'Something went wrong!',
          backdropDismiss: false,
          buttons: [
            {
              text: 'Ok',
            },
          ],
        });

        await alert.present();
        await alert.onDidDismiss();
      }
    );
  }
  interval:any;
  sendRequestForArray(survey){

  }
}
