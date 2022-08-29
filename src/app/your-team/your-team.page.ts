import { Component, OnInit } from '@angular/core';
import { CoachService } from '../services/coach.service';

@Component({
  selector: 'app-your-team',
  templateUrl: './your-team.page.html',
  styleUrls: ['./your-team.page.scss'],
})
export class YourTeamPage implements OnInit {
  constructor(public coachService: CoachService) {}

  ngOnInit() {
    this.coachService.coach = JSON.parse(localStorage.getItem('user'));
    this.coachService.getPlayers();
  }
}
