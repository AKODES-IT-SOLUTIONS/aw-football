/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { NavController,AlertController} from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.page.html',
  styleUrls: ['./create-survey.page.scss'],
})
export class CreateSurveyPage implements OnInit {
  isLoading = true;
  questions = [];
  selectedQuestions = [];
  surveyName = '';
  surveyNameError = {
    status: false,
    message: '',
  };
  TimeError = {
    status: false,
    message: '',
  };
  addQuestionError = {
    status: false,
    message: '',
  };
  error = {
    status: false,
    message: '',
  };
  segmentvalue:any;
  createsurvey:boolean=false;
  savedsurvey:boolean=false;
  coach = JSON.parse(localStorage.getItem('user'));

  selectedSurvey: any;
  displayOption = false;
  displaySpinner = false;

  maxTime='';

  surveyAnswer = [];
  displayPlayer = 0;
  surveyList = [];
  survey = '';

  savedQustion=[];
  checked=false;
  changetime:any;

  constructor(
    private route: ActivatedRoute,
    public navCtrl: NavController,
    private router: Router,
    private rest: RestService,
    public alertController: AlertController
  ) {
  }

  
  back() {
    this.navCtrl.navigateBack('/home-coach');
  }

  create(){
    this.createsurvey=false;
    this.savedsurvey=false;

    $("#saveddiv").removeClass('btn2new');
    // $("#creatediv").removeClass('btn1');
    $("#creatediv").addClass('btn2new')
  }
  saved(){
    this.createsurvey=true;
    this.savedsurvey=true;

    $("#saveddiv").addClass('btn2new');
    $("#creatediv").removeClass('btn2new');
    $("#creatediv").addClass('btn1new')

    this.displayPlayer = 0;
    this.surveyList = [];
    this.survey = '';
    this.surveyAnswer = [];
    this.coach = JSON.parse(localStorage.getItem('user'));
    this.getsavedSurvey(this.coach.users_id);
  }

  toggleSelect(index,q) {
    if (!this.isLoading) {
      console.log('questions_list',q);
      // this.displayOption = !this.displayOption;
      this.surveyList[index].isdown= !(this.surveyList[index].isdown);
    }
  }
  // selectSurvey(survey) {
  
  //  console.log('surveyssss',survey);
  //   if (survey.type) {
  //     this.displayOption = !this.displayOption;
  //     return;
  //   }
  //   this.selectedSurvey = survey;
  //   this.surveyAnswer = [];
  //   this.survey = survey.survey_name;
  //   this.displayOption = !this.displayOption;
  //   this.getAnswers(survey.coach_id);
  // }
  // getAnswers(coachID) {
  //   console.log('coach ID',coachID);
  //   this.displaySpinner = true;
  //   this.rest
  //     .getPlayersAnswer({
  //       requestType: 'saved_surveys_list',
  //       coach_id: 3,
  //     })
  //     .subscribe((data: any) => {
  //       console.log('data on coach ID',data);
  //       this.displaySpinner = false;
  //       // if (data.status === 'success') {
  //       //   this.surveyAnswer = data.players_response;
  //       // } else {
  //       //   this.surveyAnswer = [];
  //       // }
  //     });
  // }

  send() {
    if (this.surveyName.trim().length !== 0) {
      if(this.maxTime==''){
        this.TimeError.status = true;
        this.TimeError.message = 'Time is required!';
        setTimeout(() => {
          this.TimeError.status = false;
          this.TimeError.message = '';
        }, 3000);
      }else
      if (this.selectedQuestions.length === 0) {
        this.addQuestionError.status = true;
        this.addQuestionError.message = 'Please select questions!';
        setTimeout(() => {
          this.addQuestionError.status = false;
          this.addQuestionError.message = '';
        }, 3000);
      } else {
        const navigationExtras: NavigationExtras = {
          state: {
            selectedQuestions: {
              questions_list: this.selectedQuestions,
              survey_name: this.surveyName,
              time:this.maxTime
            },
          },
        };
        this.navCtrl.navigateForward('send-survey',navigationExtras);
        // this.navCtrl.navigateForward(['send-survey',{
        //   questions_list: JSON.stringify(this.selectedQuestions),
        //       survey_name: this.surveyName,
        //       totaltime:this.maxTime
        // }]);
      }
    } else {
      this.surveyNameError.status = true;
      this.surveyNameError.message = 'Survey name is required!';
      setTimeout(() => {
        this.surveyNameError.status = false;
        this.surveyNameError.message = '';
      }, 3000);
    }
  }
  sendsaved(){
    console.log('saved savedQustion',this.savedQustion,'checked',this.checked);
    if(this.savedQustion.length===0){
      this.addQuestionError.status = true;
      this.addQuestionError.message = 'Please select surveys!';
      setTimeout(() => {
        this.addQuestionError.status = false;
        this.addQuestionError.message = '';
      }, 3000);

    }else{
      this.presentAlertPrompt(this.savedQustion)
    //   const navigationExtras: NavigationExtras = {
    //     state: {
    //       selectedQuestions: this.savedQustion,
    //         // survey_name: this.surveyName,
    //         // time:this.maxTime
          
    //     },
    //   };
    // this.navCtrl.navigateForward('send-survey',navigationExtras);
    }
  }




  interval:any=0;
  async presentAlertPrompt(savedqstn) {
    
    console.log('savedqstn length',savedqstn.length)
    
    if(this.interval==savedqstn.length){
      console.log('hellow')
      const navigationExtras: NavigationExtras = {
        state: {
          selectedQuestions: this.savedQustion,
            // survey_name: this.surveyName,
            // time:this.maxTime
          
        },
      };
      this.navCtrl.navigateForward('send-survey',navigationExtras);
    }else{
      
      console.log('var value index stat',this.interval)
       const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'update time',
        subHeader:savedqstn[this.interval].survey_name,
        inputs: [
          {
            name: this.changetime,
            type: 'tel',
            placeholder: 'time(mins)',
            value:savedqstn[this.interval].time
          }
        ],
        buttons: [
          // {
          //   text: 'Cancel',
          //   role: 'cancel',
          //   cssClass: 'secondary',
          //   handler: () => {
          //     console.log('Confirm Cancel');
          //   }
          // }, 
          {
            text: 'Ok',
            handler: (data) => {
              console.log('data of time',data[0])
              console.log('var value',this.interval)
              console.log('savedqstn[interval].survey_id',savedqstn[this.interval].survey_id)
              // this.changetime=data[0]
              this.rest.updatetime({
               requestType:'update_survey_time',
                survey_id:savedqstn[this.interval].survey_id,
                time:data[0] 
              }).subscribe(
                (data: any) => {
                  console.log('data about data',data);
                  this.isLoading = false;
                  if (data.status === 'success') {
                    this.presentAlertPrompt(savedqstn)
                    console.log('success');
                  } else {
                    this.error.status = true;
                    this.error.message = 'Nothing found!';
                    this.questions = [];
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
              // interval++;
              
              // if(interval==savedqstn.length){
              //   const navigationExtras: NavigationExtras = {
              //   state: {
              //     selectedQuestions: this.savedQustion,
              //       // survey_name: this.surveyName,
              //       // time:this.maxTime
                  
              //   },
              // };
              // this.navCtrl.navigateForward('send-survey',navigationExtras);
              // }else{
              //   console.log('finish')
              // }
              console.log('Confirm Ok');
              this.interval++;
               // this.presentAlertPrompt(savedqstn)
            }
          }
        ]
      });

      await alert.present(); 
    }
     
    
   
  }

  savesurvey() {
    if (this.surveyName.trim().length !== 0) {
      if(this.maxTime==''){
        this.TimeError.status = true;
        this.TimeError.message = 'Time is required!';
        setTimeout(() => {
          this.TimeError.status = false;
          this.TimeError.message = '';
        }, 3000);
      }else
      if (this.selectedQuestions.length === 0) {
        this.addQuestionError.status = true;
        this.addQuestionError.message = 'Please select questions!';
        setTimeout(() => {
          this.addQuestionError.status = false;
          this.addQuestionError.message = '';
        }, 3000);
      }else {
        this.isLoading = true;
        this.rest
          .savedSurvey({
            requestType: 'save_survey',
            questions_list: this.selectedQuestions,
            survey_name: this.surveyName,
            coach_id: this.coach.users_id,
            time:this.maxTime
            
          })
          .subscribe(
            async (data: any) => {
              this.isLoading = false;
              console.log('saved surveys',data);
              const alert = await this.alertController.create({
                cssClass: 'sendSurvey',
                message: 'Your Survey is Saved.',
                backdropDismiss: false,
                buttons: [
                  {
                    text: 'Ok',
                    cssClass: 'btn_ok',
                  },
                ],
              });

              await alert.present();
              await alert.onDidDismiss();
              this.surveyName='';
              this.maxTime='';
              this.selectedQuestions=[];
            },
            async (error) => {
              // this.sendingSurvey = false;
              console.log('error',error);
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
    } else {
      this.surveyNameError.status = true;
      this.surveyNameError.message = 'Survey name is required!';
      setTimeout(() => {
        this.surveyNameError.status = false;
        this.surveyNameError.message = '';
      }, 3000);
    }
    
  }
  addSurveyQuestion(question, checkbox) {
    console.log('question',question);
    if (checkbox.detail.checked) {
      console.log('question',checkbox);
      this.selectedQuestions.push({
        question_id: question.survey_questions_id,
        question_name: question.question_name,
      });
    } else {
      this.selectedQuestions = this.selectedQuestions.filter(
        (ques) => ques.question_id !== question.survey_questions_id
      );
    }
  }
   addSurveyQuestion1(data,checkbox,index) {
     console.log('index number',index);
     console.log('checked',checkbox)
    if(checkbox.detail.checked==false){
      this.savedQustion.map((el,i) => {
        console.log('index',i)
        if(el.survey_name === data.surveyname){
          this.savedQustion.splice(i,1)
        }
      })
      console.log("deleted",this.savedQustion)
      this.checked=checkbox.detail.checked
    }
    if (checkbox.detail.checked) {
      console.log('checkbox',checkbox.detail.checked);
      this.checked=checkbox.detail.checked;
      console.log('data click on checkbox',data);

      let obj={
        survey_name:data.surveyname,
        questions_list:data.questionslist,
        time:data.time,
        survey_id:data.survey_id, 
      }
      this.savedQustion.push(obj);
      // this.savedQustion=data.questionslist
      // this.surveyName=data.surveyname
      // this.maxTime=data.time
      console.log('questions_list',this.savedQustion);
    }
    // else {
    //   // let indexnumber;
    //   //  indexnumber = this.savedQustion.indexOf(index);
    //   //  console.log('indexnumber in else',indexnumber);
    //   //  this.savedQustion.splice(indexnumber,1);
    //   this.savedQustion = this.savedQustion.filter(
    //     (ques) => ques.question_id !== data.questions_id
    //   );
    //   console.log('aarray after unchecked',this.savedQustion);
    // }

  }
  getQuestions() {
    this.isLoading = true;
    this.rest
      .getQuestions({
        status: 'Active',
        requestType: 'add_question',
      })
      .subscribe(
        (data: any) => {
          console.log('data about data',data);
          this.isLoading = false;
          if (data.status === 'success') {
            this.questions = data.question;
          } else {
            this.error.status = true;
            this.error.message = 'Nothing found!';
            this.questions = [];
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
  }
  getsavedSurvey(id) {
    this.surveyList=[];
    this.surveyName='';
    this.maxTime='';
    console.log('coach id',id)
    this.isLoading=true;
    this.rest
      .getSurveys({
        requestType: 'get_saved_survey',
        coach_id: id,
      })
      .subscribe(
        (data: any) => {
          console.log('saved surveys data',data);
          this.isLoading = false;
          if (data.status === 'success') {
            data.data.forEach(item=>{
              let details={
                surveyname:item.survey_name,
                questionslist:item.question_array,
                time:item.time,
                survey_id:item.surveys_id
              }
              this.surveyList.push(details); 
              // this.surveyList= item.survey_name.map(val => ({...val, isdown: true}));
            })
            console.log('coach id related data',this.surveyList);
          } 
          // else {
          //   this.surveyList.push({
          //     survey_name: 'No survey found!',
          //     type: true,
          //   });
          // }
        },
        (error) => {
          this.isLoading = false;
        }
      );
  }
  doRefresh(event) {
    setTimeout(() => {
      this.questions = [];
      this.getQuestions();
      event.target.complete();
    }, 1000);
  }
  ngOnInit() {
    this.surveyName = '';
    this.maxTime='';
    this.questions = [];
    this.surveyList=[];
    this.getQuestions();

    var students = ['Alex', 'Fred', 'Molly', 'Paul']

    students.splice(1, 1);
    console.log('deleted students',students);
  }
}
