/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CoachService {
  deleteId = null;
  addLoading = false;
  addLoading1 = false;
  delLoading = false;
  isLoading = true;
  error = {
    status: false,
    message: '',
  };
  coach = JSON.parse(localStorage.getItem('user'));
  displayInput = false;
  team = [];

  teamname:any='';
  inputvalue:boolean=false;
  textvalue:boolean=false;

  isdisabled=true;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rest: RestService,
    public alertController: AlertController,
    public navCtrl: NavController
  ) {
  }

  
  toggle() {
    this.addLoading = false;
    this.addLoading1 = false;
    if(this.teamname=='' || this.teamname==null){
      console.log('empty')
      // this.inputvalue=false;
      this.isdisabled=false
    }else{
      console.log('notempty',this.teamname);
      // this.textvalue=true;
      // this.inputvalue=true;
      this.addLoading1 = true;
      this.isdisabled=true;
    }

    this.displayInput = !this.displayInput;
  }
 async addTeam(el){
    console.log('value',el.value);
    if (el.value !== '') {
      this.addLoading1 = true; 
      this.teamname=el.value
      const alert = await this.alertController.create({
        cssClass: 'sendTeamRequest',
        message: `Team name added ${el.value.trim()}`,
        backdropDismiss: false,
        buttons: [
          {
            text: 'Ok',
            cssClass: 'btn_ok',
          },
        ],
      });
      console.log('team_name',this.teamname)
    }
  }
  async addPlayer(el) {
    if(this.teamname===''){
       const alert = await this.alertController.create({
        cssClass: 'sendTeamRequest',
        message: `Team name must be added`,
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
    }else{
      if (el.value !== '') {
      this.addLoading = true;
      this.rest
        .addPlayers({
          requestType: 'add_player',
          user_name: el.value.trim(),
          coach_id: this.coach.users_id,
          team_name:this.teamname
        })
        .subscribe(
          async (data: any) => {
            console.log('data of addPlayers',data);
            this.addLoading = false;
            if (data.status === 'Error') {
              this.error.status = true;
              this.error.message = data.msg;
              setTimeout(() => {
                this.error.status = false;
                this.error.message = '';
              }, 3000);
              return;
            } else if (data.status === 'success') {
              this.team = data.team;
              this.displayInput = !this.displayInput;
              const alert = await this.alertController.create({
                cssClass: 'sendTeamRequest',
                message: `Request forwarded to ${el.value.trim()}`,
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
            }
          },
          (error) => {
            this.isLoading = false;
            this.addLoading = false;
            this.error.status = true;
            this.error.message = 'Something went wrong!';
            setTimeout(() => {
              this.error.status = false;
              this.error.message = '';
            }, 3000);
          }
        );
    }
    }
    console.log('playername',el.value);
  }
  removePlayer(id) {
    this.delLoading = true;
    this.deleteId = id;
    this.rest
      .removePlayer({
        requestType: 'delete_team',
        teams_id: id,
        coach_id: this.coach.users_id,
      })
      .subscribe((data: any) => {
        this.deleteId = null;
        this.delLoading = false;
        if (data.status === 'error') {
          this.error.status = true;
          this.error.message = 'Error in deleteing player!';
          setTimeout(() => {
            this.error.status = false;
            this.error.message = '';
          }, 3000);
        } else if (data.status === 'success') {
          this.team = [];
          for (const player of data.team) {
            if (player.status === 'Active') {
              this.team.push(player);
            }
          }
        } else {
          this.error.status = true;
          this.error.message = 'Something went wrong!';
          setTimeout(() => {
            this.error.status = false;
            this.error.message = '';
          }, 3000);
        }
      });
  }
  onEnter(el) {
    this.addPlayer(el);
  }
  onEnterTeam(el){
    console.log('value el',el);
    this.addTeam(el);
  }
  back() {
    this.navCtrl.navigateRoot('/home-coach');
  }
  getPlayers() {
    this.rest
      .getPlayers({
        requestType: 'get_player',
        coach_id: this.coach.users_id,
      })
      .subscribe((data: any) => {
        console.log('data to get players',data);
        if (data.status === 'Error') {
          this.isLoading = false;
        } else {
          this.team = [];
          this.teamname=data.name
          if(this.teamname=='' || this.teamname==null){
              console.log('empty')
              // this.inputvalue=false;
              this.isdisabled=false
              this.displayInput=false;
          }else{
            console.log('notempty',this.teamname);
            // this.textvalue=true;
            // this.inputvalue=true;
            this.addLoading1 = true;
            this.isdisabled=true;
            if(this.displayInput==false){
              this.displayInput=true;
              console.log('displayInput',this.displayInput)
            }
            // else{
            //   this.displayInput=false;
            //   console.log('displayInput',this.displayInput)
            // }
          }
          console.log('to get teamname',this.teamname);
          this.isLoading = false;
          for (const player of data.team) {
            if (player.status === 'Active') {
              this.team.push(player);
            }
          }
        }
      });
  }
  doRefresh(event) {
    setTimeout(() => {
      this.isLoading = true;
      this.team = [];
      this.coach = JSON.parse(localStorage.getItem('user'));
      this.getPlayers();
      event.target.complete();
      // if(this.displayInput==this.displayInput){
      //   this.displayInput=!this.displayInput
      //   console.log('true');
      // }if(this.displayInput=!this.displayInput){
      //   this.displayInput=!this.displayInput
      //   console.log('false');
      // }
    }, 1000);
  }

  ionViewWillEnter(){
    this.getPlayers();

  }
}
