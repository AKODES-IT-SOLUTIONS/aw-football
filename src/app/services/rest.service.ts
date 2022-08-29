/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  headers = new HttpHeaders();
  phoneId = '';
  // baseURL = 'https://aw-football.com/webservices';
  baseURL='https://aw-football.com/Webservices/'
  // baseURL = 'https://dev.eigix.com/aw-football/Webservices';
  authState = new BehaviorSubject(false);
  constructor(private http: HttpClient, private platform: Platform) {
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append(
      'Access-Control-Allow-Methods',
      'POST, GET, DELETE, PUT'
    );
    this.platform.ready().then(() => {
      this.isLoggedIn();
    });
  }
  signIn(data) {
    return this.http.post(`${this.baseURL}/login/`, JSON.stringify(data), {
      headers: this.headers,
    });
  }
  signUp(data) {
    return this.http.post(`${this.baseURL}/signup/`, JSON.stringify(data), {
      headers: this.headers,
    });
  }
  
  addPlayers(data) {
    return this.http.post(
      `${this.baseURL}/manage_teams/`,
      JSON.stringify(data),
      { headers: this.headers }
    );
  }
  getPlayers(data) {
    return this.http.post(
      `${this.baseURL}/manage_teams/`,
      JSON.stringify(data),
      { headers: this.headers }
    );
  }
  removePlayer(data) {
    return this.http.post(
      `${this.baseURL}/manage_teams/`,
      JSON.stringify(data),
      { headers: this.headers }
    );
  }
  getQuestions(data) {
    return this.http.post(`${this.baseURL}/Survey/`, JSON.stringify(data), {
      headers: this.headers,
    });
  }
  sendSurvey(data) {
    return this.http.post(`${this.baseURL}/Survey/`, JSON.stringify(data), {
      headers: this.headers,
    });
  }
  savedSurvey(data) {
    return this.http.post(`${this.baseURL}/Survey/`, JSON.stringify(data), {
      headers: this.headers,
    });
  }
  getSurvey(data) {
    return this.http.post(`${this.baseURL}/Survey/`, JSON.stringify(data), {
      headers: this.headers,
    });
  }
  getSurveys(data) {
    return this.http.post(`${this.baseURL}/Survey/`, JSON.stringify(data), {
      headers: this.headers,
    });
  }
  sendSurveyResponse(data) {
    return this.http.post(`${this.baseURL}/Survey/`, JSON.stringify(data), {
      headers: this.headers,
    });
  }
  updatetime(data) {
    return this.http.post(`${this.baseURL}/Survey/`, JSON.stringify(data), {
      headers: this.headers,
    });
  }
  getCoachSurvey(data) {
    return this.http.post(`${this.baseURL}/Survey/`, JSON.stringify(data), {
      headers: this.headers,
    });
  }
  getPlayersAnswer(data) {
    return this.http.post(`${this.baseURL}/Survey/`, JSON.stringify(data), {
      headers: this.headers,
    });
  }
  forgotEmail(data) {
    return this.http.post(
      `${this.baseURL}/forgot_password/`,
      JSON.stringify(data),
      { headers: this.headers }
    );
  }
  sendPinCode(data) {
    return this.http.post(
      `${this.baseURL}/forgot_password/`,
      JSON.stringify(data),
      { headers: this.headers }
    );
  }
  resetPassword(data) {
    return this.http.post(
      `${this.baseURL}/forgot_password/`,
      JSON.stringify(data),
      { headers: this.headers }
    );
  }
  getTeamRequest(data) {
    return this.http.post(
      `${this.baseURL}/manage_teams/`,
      JSON.stringify(data),
      { headers: this.headers }
    );
  }
  inviteResponse(data) {
    return this.http.post(
      `${this.baseURL}/manage_teams/`,
      JSON.stringify(data),
      { headers: this.headers }
    );
  }
  sendDeviceId(data) {
    return this.http.post(
      `${this.baseURL}/update_onsignal/`,
      JSON.stringify(data),
      { headers: this.headers }
    );
  }
  isLoggedIn() {
    const rememberMe = JSON.parse(localStorage.getItem('rememberMe'));
    if (rememberMe) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        this.authState.next(true);
      } else {
        this.authState.next(false);
      }
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('rememberMe');
      localStorage.removeItem('team');
      localStorage.removeItem('accountType');
      this.authState.next(false);
    }
  }
  isAuthenticated() {
    return this.authState.value;
  }
  logout(data) {
    return this.http.post(`${this.baseURL}/logout`, JSON.stringify(data), {
      headers: this.headers,
    });
  }
}
