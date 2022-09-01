(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["player2player-player2player-module"],{

/***/ "4Esl":
/*!*****************************************************!*\
  !*** ./src/app/player2player/player2player.page.ts ***!
  \*****************************************************/
/*! exports provided: Player2playerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player2playerPage", function() { return Player2playerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_player2player_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./player2player.page.html */ "MQoY");
/* harmony import */ var _player2player_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player2player.page.scss */ "ZQOk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/rest.service */ "tnAE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");



/* eslint-disable @typescript-eslint/naming-convention */




let Player2playerPage = class Player2playerPage {
    constructor(route, router, navCtrl, rest) {
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.displayOption = false;
        this.displaySpinner = false;
        this.isLoading = true;
        this.surveyAnswer = [];
        this.displayPlayer = 0;
        this.surveyList = [];
        this.survey = '';
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
        console.log('surveyssss', survey);
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
        console.log('surveyssss ID', surveyID);
        this.displaySpinner = true;
        this.rest
            .getPlayersAnswer({
            requestType: 'playerToplayer',
            survey_id: surveyID,
        })
            .subscribe((data) => {
            console.log('data', data);
            this.displaySpinner = false;
            if (data.status === 'success') {
                this.surveyAnswer = data.players_response;
            }
            else {
                this.surveyAnswer = [];
            }
        });
    }
    getCoachSurvey(id) {
        console.log('coach id', id);
        this.rest
            .getCoachSurvey({
            requestType: 'coachs_surveys',
            coach_id: id,
        })
            .subscribe((data) => {
            console.log('coach id related data', data);
            this.isLoading = false;
            if (data.status === 'success') {
                this.surveyList = data.your_survey;
            }
            else {
                this.surveyList.push({
                    survey_name: 'No survey found!',
                    type: true,
                });
            }
        }, (error) => {
            this.isLoading = false;
        });
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
};
Player2playerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] }
];
Player2playerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-player2player',
        template: _raw_loader_player2player_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_player2player_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Player2playerPage);



/***/ }),

/***/ "MQoY":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/player2player/player2player.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content\n  ><ion-refresher\n    *ngIf=\"survey !== ''\"\n    slot=\"fixed\"\n    (ionRefresh)=\"doRefresh($event)\"\n  >\n    <ion-refresher-content> </ion-refresher-content>\n  </ion-refresher>\n  <div class=\"headDiv\">\n    <ion-header class=\"ion-no-border\">\n      <ion-toolbar class=\"headBg\">\n        <div class=\"header\">\n          <div class=\"back-btn\">\n            <svg\n              (click)=\"back()\"\n              class=\"backSvg\"\n              version=\"1.1\"\n              id=\"Capa_1\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n              x=\"0px\"\n              y=\"0px\"\n              width=\"14.25px\"\n              height=\"20.43px\"\n              viewBox=\"0 0 792.082 792.082\"\n              style=\"enable-background: new 0 0 792.082 792.082\"\n              xml:space=\"preserve\"\n            >\n              <g>\n                <g id=\"_x37__34_\">\n                  <g>\n                    <path\n                      d=\"M317.896,396.024l304.749-276.467c27.36-27.36,27.36-71.677,0-99.037s-71.677-27.36-99.036,0L169.11,342.161\n        c-14.783,14.783-21.302,34.538-20.084,53.897c-1.218,19.359,5.301,39.114,20.084,53.897l354.531,321.606\n        c27.36,27.36,71.677,27.36,99.037,0s27.36-71.677,0-99.036L317.896,396.024z\"\n                    />\n                  </g>\n                </g>\n              </g>\n              <g></g>\n              <g></g>\n              <g></g>\n              <g></g>\n              <g></g>\n              <g></g>\n              <g></g>\n              <g></g>\n              <g></g>\n              <g></g>\n              <g></g>\n              <g></g>\n              <g></g>\n              <g></g>\n              <g></g>\n            </svg>\n          </div>\n          <div class=\"container\">\n            <p class=\"TopHead\">Player To Player</p>\n          </div>\n        </div>\n      </ion-toolbar>\n    </ion-header>\n    <div class=\"headBg2\">\n      <div class=\"container\">\n        <div class=\"selectInput\">\n          <ion-input\n            (click)=\"toggleSelect()\"\n            [(ngModel)]=\"survey\"\n            class=\"input\"\n            value=\"\"\n            readonly\n            placeholder=\"Select Survey\"\n          ></ion-input>\n\n          <div *ngIf=\"displayOption\" class=\"options\">\n            <ion-input\n              *ngFor=\"let sur of surveyList\"\n              (click)=\"selectSurvey(sur)\"\n              class=\"option\"\n              value=\"\"\n              readonly\n              value=\"{{sur.survey_name}}\"\n            ></ion-input>\n          </div>\n          <div *ngIf=\"isLoading\" class=\"spinnerSurvey\">\n            <div class=\"lds-ring\">\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n            </div>\n          </div>\n          <div *ngIf=\"!isLoading\" class=\"dorpIcon\">\n            <svg\n              *ngIf=\"!displayOption\"\n              class=\"polygon\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"15\"\n              height=\"13\"\n              viewBox=\"0 0 15 13\"\n            >\n              <defs>\n                <style>\n                  .a {\n                    fill: #002c53;\n                  }\n                </style>\n              </defs>\n              <path\n                class=\"a\"\n                d=\"M5.768,3A2,2,0,0,1,9.232,3l4.037,7a2,2,0,0,1-1.732,3H3.463A2,2,0,0,1,1.73,10Z\"\n                transform=\"translate(15 13) rotate(180)\"\n              />\n            </svg>\n\n            <svg\n              *ngIf=\"displayOption\"\n              class=\"polygon\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"15\"\n              height=\"13\"\n              viewBox=\"0 0 15 13\"\n            >\n              <defs>\n                <style>\n                  .a {\n                    fill: #002c53;\n                  }\n                </style>\n              </defs>\n              <path\n                class=\"a\"\n                d=\"M5.768,3A2,2,0,0,1,9.232,3l4.037,7a2,2,0,0,1-1.732,3H3.463A2,2,0,0,1,1.73,10Z\"\n              />\n            </svg>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"main\">\n    <div class=\"container\">\n      <div *ngIf=\"survey === ''\" class=\"notFoundDiv\">\n        <p class=\"notFound\">Please select a survey!</p>\n      </div>\n\n      <div *ngIf=\"surveyAnswer.length > 0\" class=\"main-heading\">\n        <ion-icon\n          (click)=\"previousPlayer()\"\n          class=\"arrow\"\n          name=\"arrow-back-circle\"\n          size=\"large\"\n        ></ion-icon>\n        <p class=\"head\">{{surveyAnswer[displayPlayer].user_name}}</p>\n        <ion-icon\n          (click)=\"nextPlayer()\"\n          class=\"arrow\"\n          name=\"arrow-forward-circle\"\n          size=\"large\"\n        ></ion-icon>\n      </div>\n      <div *ngIf=\"displaySpinner\" class=\"spinner-div\">\n        <div class=\"spinner\">\n          <div class=\"lds-ring2\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"surveyAnswer.length > 0\">\n        <div *ngIf=\"!displaySpinner\">\n          <div\n            *ngIf=\"surveyAnswer[displayPlayer].surveys_responses.length > 0;else nothingFound\"\n            class=\"list\"\n          >\n            <div\n              *ngFor=\"let ans of surveyAnswer[displayPlayer].surveys_responses\"\n              class=\"list-item\"\n            >\n              <p class=\"list-title\">{{ans.question_name}}</p>\n              <p class=\"list-points\">{{ans.answer}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <ng-template #nothingFound>\n        <div *ngIf=\"!displaySpinner\" class=\"notFoundDiv\">\n          <p class=\"notFound\">No response added by player yet!</p>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "VLDW":
/*!*******************************************************!*\
  !*** ./src/app/player2player/player2player.module.ts ***!
  \*******************************************************/
/*! exports provided: Player2playerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player2playerPageModule", function() { return Player2playerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _player2player_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player2player-routing.module */ "pVWO");
/* harmony import */ var _player2player_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player2player.page */ "4Esl");







let Player2playerPageModule = class Player2playerPageModule {
};
Player2playerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _player2player_routing_module__WEBPACK_IMPORTED_MODULE_5__["Player2playerPageRoutingModule"]
        ],
        declarations: [_player2player_page__WEBPACK_IMPORTED_MODULE_6__["Player2playerPage"]]
    })
], Player2playerPageModule);



/***/ }),

/***/ "ZQOk":
/*!*******************************************************!*\
  !*** ./src/app/player2player/player2player.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #002c53;\n}\n\n.headDiv {\n  background: #002c53;\n}\n\n.headBg2 {\n  background: #002c53;\n  padding: 0px 30px 30px 30px;\n  border: 1px solid #002c53;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 12px 12px 0px 12px;\n}\n\n.back-btn {\n  font-size: 20px;\n  padding: 10px 0 0 0;\n  fill: #fff;\n  cursor: pointer;\n}\n\n.backSvg {\n  fill: #fff;\n}\n\n.TopHead {\n  text-align: center;\n  flex-grow: 1;\n  font-size: 20px;\n  padding: 12px;\n  color: #fff;\n}\n\n.container {\n  width: 80%;\n  margin: auto;\n}\n\n.selectInput {\n  position: relative;\n  margin-bottom: 20px;\n}\n\n.input {\n  border: none;\n  --padding-start: 20px;\n  --padding-end: 20px;\n  --padding-top: 15px;\n  --padding-bottom: 15px;\n  border-radius: 10px;\n  background-color: #fff;\n  color: #002c53;\n  font-size: 14px;\n  margin: auto;\n  cursor: pointer;\n}\n\n.options {\n  z-index: 9999;\n  margin-top: -8px;\n  max-height: 350px;\n  overflow-x: hidden;\n  overflow: scroll;\n  position: absolute;\n  width: 100%;\n}\n\n.option {\n  --padding-start: 20px;\n  --padding-end: 20px;\n  --padding-top: 15px;\n  --padding-bottom: 15px;\n  border-radius: none;\n  background-color: #fff;\n  color: #002c53;\n  --placeholder-color: #002c53;\n  font-size: 14px;\n  margin: auto;\n  margin-top: -2px;\n  cursor: pointer;\n}\n\n.polygon {\n  position: absolute;\n  top: 15px;\n  right: 10px;\n  z-index: 10;\n}\n\n.notFoundDiv {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: center;\n}\n\n.notFound {\n  text-align: center;\n  font-weight: 400;\n  color: #002c53;\n  font-size: 15px;\n}\n\n.spinnerSurvey {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 10;\n}\n\n.main {\n  border-radius: 25px;\n  position: relative;\n  margin-top: -20px;\n  background: #f5f5f5;\n  padding: 20px;\n}\n\n.main-heading {\n  padding-top: 20px;\n  display: flex;\n  justify-content: center;\n}\n\n.head {\n  color: #002c53;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 500;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.arrow {\n  color: #002c53;\n  font-size: 64px;\n  flex: 0 0 40px;\n}\n\n.list {\n  margin-top: 20px;\n}\n\n.list-item {\n  display: flex;\n  justify-content: space-between;\n}\n\n.list-title {\n  color: #002c53;\n  font-size: 14px;\n  letter-spacing: 0;\n  margin-bottom: 5px;\n}\n\n.list-points {\n  color: #002c53;\n  font-size: 15px;\n  font-weight: 700;\n}\n\n.lds-ring {\n  display: inline-block;\n  position: relative;\n  width: 24px;\n  height: 24px;\n}\n\n.lds-ring div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  border: 4px solid #002c53;\n  border-radius: 50%;\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #002c53 transparent transparent transparent;\n}\n\n.lds-ring div:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n\n.lds-ring div:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n\n.lds-ring div:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n\n@-webkit-keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.spinner-div {\n  display: flex;\n  justify-content: center;\n}\n\n.lds-ring2 {\n  display: inline-block;\n  position: relative;\n  width: 24px;\n  height: 24px;\n}\n\n.lds-ring2 div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  border: 4px solid #002c53;\n  border-radius: 50%;\n  -webkit-animation: lds-ring2 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring2 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #002c53 transparent transparent transparent;\n}\n\n.lds-ring2 div:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n\n.lds-ring2 div:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n\n.lds-ring2 div:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n\n@-webkit-keyframes lds-ring2 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-ring2 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBsYXllcjJwbGF5ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBSEE7RUFDRSxVQUFBO0FBTUY7O0FBSkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFPRjs7QUFIQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBTUY7O0FBSkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBT0Y7O0FBTEE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVFGOztBQU5BO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBU0Y7O0FBUEE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVVGOztBQVJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFXRjs7QUFUQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFZRjs7QUFWQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWFGOztBQVhBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFjRjs7QUFaQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQWVGOztBQWJBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFnQkY7O0FBZEE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBaUJGOztBQWZBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBa0JGOztBQWhCQTtFQUNFLGdCQUFBO0FBbUJGOztBQWpCQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQW9CRjs7QUFsQkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFxQkY7O0FBbkJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXNCRjs7QUFuQkE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFzQkY7O0FBcEJBO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzRUFBQTtVQUFBLDhEQUFBO0VBQ0EseURBQUE7QUF1QkY7O0FBckJBO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtBQXdCRjs7QUF0QkE7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FBeUJGOztBQXZCQTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUEwQkY7O0FBeEJBO0VBQ0U7SUFDRSx1QkFBQTtFQTJCRjtFQXpCQTtJQUNFLHlCQUFBO0VBMkJGO0FBQ0Y7O0FBakNBO0VBQ0U7SUFDRSx1QkFBQTtFQTJCRjtFQXpCQTtJQUNFLHlCQUFBO0VBMkJGO0FBQ0Y7O0FBeEJBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBMEJGOztBQXhCQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQTJCRjs7QUF6QkE7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVFQUFBO1VBQUEsK0RBQUE7RUFDQSx5REFBQTtBQTRCRjs7QUExQkE7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FBNkJGOztBQTNCQTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QUE4QkY7O0FBNUJBO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtBQStCRjs7QUE3QkE7RUFDRTtJQUNFLHVCQUFBO0VBZ0NGO0VBOUJBO0lBQ0UseUJBQUE7RUFnQ0Y7QUFDRjs7QUF0Q0E7RUFDRTtJQUNFLHVCQUFBO0VBZ0NGO0VBOUJBO0lBQ0UseUJBQUE7RUFnQ0Y7QUFDRiIsImZpbGUiOiJwbGF5ZXIycGxheWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkQmcge1xyXG4gIC0tYmFja2dyb3VuZDogIzAwMmM1MztcclxufVxyXG4uaGVhZERpdiB7XHJcbiAgYmFja2dyb3VuZDogIzAwMmM1MztcclxufVxyXG4uaGVhZEJnMiB7XHJcbiAgYmFja2dyb3VuZDogIzAwMmM1MztcclxuICBwYWRkaW5nOiAwcHggMzBweCAzMHB4IDMwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMmM1MztcclxufVxyXG4uaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTJweCAxMnB4IDBweCAxMnB4O1xyXG59XHJcbi5iYWNrLWJ0biB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMCAwIDA7XHJcbiAgZmlsbDogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJhY2tTdmcge1xyXG4gIGZpbGw6ICNmZmY7XHJcbn1cclxuLlRvcEhlYWQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi8vL1xyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uc2VsZWN0SW5wdXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5pbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gIC0tcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6ICMwMDJjNTM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm9wdGlvbnMge1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgbWFyZ2luLXRvcDogLThweDtcclxuICBtYXgtaGVpZ2h0OiAzNTBweDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm9wdGlvbiB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogMTVweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogIzAwMmM1MztcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMDAyYzUzO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogLTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnBvbHlnb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuLm5vdEZvdW5kRGl2IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubm90Rm91bmQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjMDAyYzUzO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uc3Bpbm5lclN1cnZleSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTBweDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG4ubWFpbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5tYWluLWhlYWRpbmcge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmhlYWQge1xyXG4gIGNvbG9yOiAjMDAyYzUzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcclxufVxyXG4uYXJyb3cge1xyXG4gIGNvbG9yOiAjMDAyYzUzO1xyXG4gIGZvbnQtc2l6ZTogNjRweDtcclxuICBmbGV4OiAwIDAgNDBweDtcclxufVxyXG4ubGlzdCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ubGlzdC1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4ubGlzdC10aXRsZSB7XHJcbiAgY29sb3I6ICMwMDJjNTM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4ubGlzdC1wb2ludHMge1xyXG4gIGNvbG9yOiAjMDAyYzUzO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi8vc3Bpbm5lclxyXG4ubGRzLXJpbmcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcbi5sZHMtcmluZyBkaXYge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBib3JkZXI6IDRweCBzb2xpZCAjMDAyYzUzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbmltYXRpb246IGxkcy1yaW5nIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcclxuICBib3JkZXItY29sb3I6ICMwMDJjNTMgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNDVzO1xyXG59XHJcbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xyXG59XHJcbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjE1cztcclxufVxyXG5Aa2V5ZnJhbWVzIGxkcy1yaW5nIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4vL3NwaW5uZXIyXHJcbi5zcGlubmVyLWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubGRzLXJpbmcyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxufVxyXG4ubGRzLXJpbmcyIGRpdiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkICMwMDJjNTM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGFuaW1hdGlvbjogbGRzLXJpbmcyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcclxuICBib3JkZXItY29sb3I6ICMwMDJjNTMgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmxkcy1yaW5nMiBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjQ1cztcclxufVxyXG4ubGRzLXJpbmcyIGRpdjpudGgtY2hpbGQoMikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XHJcbn1cclxuLmxkcy1yaW5nMiBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjE1cztcclxufVxyXG5Aa2V5ZnJhbWVzIGxkcy1yaW5nMiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "pVWO":
/*!***************************************************************!*\
  !*** ./src/app/player2player/player2player-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: Player2playerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player2playerPageRoutingModule", function() { return Player2playerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _player2player_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player2player.page */ "4Esl");




const routes = [
    {
        path: '',
        component: _player2player_page__WEBPACK_IMPORTED_MODULE_3__["Player2playerPage"]
    }
];
let Player2playerPageRoutingModule = class Player2playerPageRoutingModule {
};
Player2playerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Player2playerPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=player2player-player2player-module-es2015.js.map