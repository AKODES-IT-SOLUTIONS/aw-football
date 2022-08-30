/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player-survey',
  templateUrl: './player-survey.page.html',
  styleUrls: ['./player-survey.page.scss'],
})
export class PlayerSurveyPage implements OnInit {
  constructor(public playerService: PlayerService) { }
  ngOnInit() {
    this.playerService.sendDeviceID();
    this.playerService.surveyReady();
  }
}
