(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-coach-home-coach-module"],{

/***/ "/5jQ":
/*!*********************************************************!*\
  !*** ./src/app/home-coach/home-coach-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: HomeCoachPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCoachPageRoutingModule", function() { return HomeCoachPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_coach_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-coach.page */ "FXAy");




const routes = [
    {
        path: '',
        component: _home_coach_page__WEBPACK_IMPORTED_MODULE_3__["HomeCoachPage"]
    }
];
let HomeCoachPageRoutingModule = class HomeCoachPageRoutingModule {
};
HomeCoachPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomeCoachPageRoutingModule);



/***/ }),

/***/ "6bTa":
/*!*************************************************!*\
  !*** ./src/app/home-coach/home-coach.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headBg {\n  --background: #002c53;\n  --padding-right: 5px;\n  --padding-top: 10px;\n  --padding-bottom: 20px;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  padding: 12px;\n}\n\n.logout_btn {\n  text-align: end;\n}\n\n.logoutSvg {\n  fill: #fff;\n}\n\n.TopHead {\n  text-transform: uppercase;\n  font-weight: 400;\n  letter-spacing: 0;\n  font-size: 30px;\n  padding-left: 5px;\n  padding-top: 12px;\n  padding-bottom: 5px;\n  color: #fff;\n}\n\n.container {\n  width: 80%;\n  margin: auto;\n}\n\n.main {\n  border-radius: 25px;\n  position: relative;\n  margin-top: -20px;\n  padding: 11px;\n  padding-top: 20px;\n  padding-left: 9px;\n  background: #f5f5f5;\n  z-index: 999;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n.icon-1,\n.icon-2,\n.icon-3 {\n  background-color: #dbdfe3;\n  border-radius: 15px;\n  margin-bottom: 20px;\n  padding: 10px;\n  padding-top: 20px;\n}\n\n.icon-text {\n  font-size: 20px;\n  font-weight: 500;\n  color: #002c53;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUtY29hY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7QUFJRjs7QUFGQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBS0Y7O0FBREE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUlGOztBQUZBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFLRjs7QUFIQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBTUY7O0FBSEE7OztFQUdFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQU1GOztBQUhBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFNRiIsImZpbGUiOiJob21lLWNvYWNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkQmcge1xyXG4gIC0tYmFja2dyb3VuZDogIzAwMmM1MztcclxuICAtLXBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAtLXBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuLmxvZ291dF9idG4ge1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG4ubG9nb3V0U3ZnIHtcclxuICBmaWxsOiAjZmZmO1xyXG59XHJcbi5Ub3BIZWFkIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi8vL1xyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4ubWFpbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgcGFkZGluZzogMTFweDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDlweDtcclxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaWNvbi0xLFxyXG4uaWNvbi0yLFxyXG4uaWNvbi0zIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkZmUzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uaWNvbi10ZXh0IHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzAwMmM1MztcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "FXAy":
/*!***********************************************!*\
  !*** ./src/app/home-coach/home-coach.page.ts ***!
  \***********************************************/
/*! exports provided: HomeCoachPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCoachPage", function() { return HomeCoachPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_coach_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home-coach.page.html */ "NFK4");
/* harmony import */ var _home_coach_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-coach.page.scss */ "6bTa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/rest.service */ "tnAE");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



/* eslint-disable @typescript-eslint/naming-convention */




let HomeCoachPage = class HomeCoachPage {
    constructor(route, router, rest, navCtrl) {
        this.route = route;
        this.router = router;
        this.rest = rest;
        this.navCtrl = navCtrl;
        this.sendDeviceId();
    }
    sendDeviceId() {
        const deviceId = localStorage.getItem('deviceID');
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(deviceId);
        console.log(user.users_id);
        this.rest
            .sendDeviceId({
            deviceID: deviceId,
            users_id: user.users_id,
        })
            .subscribe((data) => {
            console.log(data);
        });
    }
    logout() {
        this.rest.logout({
            users_id: this.coach.users_id,
        });
        localStorage.removeItem('user');
        localStorage.removeItem('rememberMe');
        localStorage.removeItem('team');
        localStorage.removeItem('accountType');
        this.rest.authState.next(false);
        this.navCtrl.navigateRoot('/home');
    }
    gotoTeam() {
        this.navCtrl.navigateForward('/your-team');
    }
    gotoCreateSurvey() {
        this.navCtrl.navigateForward('/create-survey');
    }
    gotoViewAnswers() {
        this.navCtrl.navigateForward('/view-answers');
    }
    ngOnInit() {
        this.coach = JSON.parse(localStorage.getItem('user'));
    }
};
HomeCoachPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
HomeCoachPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home-coach',
        template: _raw_loader_home_coach_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_coach_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeCoachPage);



/***/ }),

/***/ "NFK4":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-coach/home-coach.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header>\n    <ion-toolbar class=\"headBg\">\n      <div class=\"header\">\n        <div class=\"logout_btn\">\n          <svg\n            (click)=\"logout()\"\n            class=\"logoutSvg\"\n            height=\"26.98px\"\n            viewBox=\"0 0 512.00533 512\"\n            width=\"26.98px\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              d=\"m320 277.335938c-11.796875 0-21.332031 9.558593-21.332031 21.332031v85.335937c0 11.753906-9.558594 21.332032-21.335938 21.332032h-64v-320c0-18.21875-11.605469-34.496094-29.054687-40.554688l-6.316406-2.113281h99.371093c11.777344 0 21.335938 9.578125 21.335938 21.335937v64c0 11.773438 9.535156 21.332032 21.332031 21.332032s21.332031-9.558594 21.332031-21.332032v-64c0-35.285156-28.714843-63.99999975-64-63.99999975h-229.332031c-.8125 0-1.492188.36328175-2.28125.46874975-1.027344-.085937-2.007812-.46874975-3.050781-.46874975-23.53125 0-42.667969 19.13281275-42.667969 42.66406275v384c0 18.21875 11.605469 34.496093 29.054688 40.554687l128.386718 42.796875c4.351563 1.34375 8.679688 1.984375 13.226563 1.984375 23.53125 0 42.664062-19.136718 42.664062-42.667968v-21.332032h64c35.285157 0 64-28.714844 64-64v-85.335937c0-11.773438-9.535156-21.332031-21.332031-21.332031zm0 0\"\n            />\n            <path\n              d=\"m505.75 198.253906-85.335938-85.332031c-6.097656-6.101563-15.273437-7.9375-23.25-4.632813-7.957031 3.308594-13.164062 11.09375-13.164062 19.714844v64h-85.332031c-11.777344 0-21.335938 9.554688-21.335938 21.332032 0 11.777343 9.558594 21.332031 21.335938 21.332031h85.332031v64c0 8.621093 5.207031 16.40625 13.164062 19.714843 7.976563 3.304688 17.152344 1.46875 23.25-4.628906l85.335938-85.335937c8.339844-8.339844 8.339844-21.824219 0-30.164063zm0 0\"\n            />\n          </svg>\n        </div>\n        <div>\n          <p class=\"TopHead\">Hello {{coach.user_name}}</p>\n        </div>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n  <div class=\"main\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div (click)=\"gotoTeam()\" class=\"icon-1\">\n          <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            width=\"68.06\"\n            height=\"43.214\"\n            viewBox=\"0 0 68.06 43.214\"\n          >\n            <defs>\n              <style>\n                .a {\n                  fill: #002c53;\n                }\n              </style>\n            </defs>\n            <path\n              class=\"a\"\n              d=\"M58.862,111.265a7.77,7.77,0,1,0-8.915,0,13.463,13.463,0,0,0-4.592,2.693,17.421,17.421,0,0,0-6.3-3.434,9.844,9.844,0,1,0-10.181,0,17.566,17.566,0,0,0-6.235,3.394,13.572,13.572,0,0,0-4.538-2.639,7.77,7.77,0,1,0-8.915,0A13.639,13.639,0,0,0,0,124.166v.889a.058.058,0,0,0,.054.054h16.47a18.113,18.113,0,0,0-.148,2.276v.916a7.161,7.161,0,0,0,7.164,7.164H44.412a7.161,7.161,0,0,0,7.164-7.164v-.916a18.112,18.112,0,0,0-.148-2.276H68.006a.058.058,0,0,0,.054-.054v-.889A13.692,13.692,0,0,0,58.862,111.265ZM48.789,104.9a5.616,5.616,0,1,1,5.723,5.616H54.3A5.607,5.607,0,0,1,48.789,104.9Zm-22.543-2.8a7.689,7.689,0,1,1,8.134,7.676h-.889A7.7,7.7,0,0,1,26.246,102.094ZM7.986,104.9a5.616,5.616,0,1,1,5.723,5.616h-.215A5.616,5.616,0,0,1,7.986,104.9ZM16.9,122.94H2.182A11.506,11.506,0,0,1,13.52,112.665h.162a11.387,11.387,0,0,1,7.339,2.734A17.681,17.681,0,0,0,16.9,122.94ZM49.4,128.3a5.017,5.017,0,0,1-5.01,5.01H23.512a5.017,5.017,0,0,1-5.01-5.01v-.916a15.469,15.469,0,0,1,14.988-15.446c.148.013.31.013.458.013s.31,0,.458-.013A15.469,15.469,0,0,1,49.4,127.384Zm1.6-5.36a17.635,17.635,0,0,0-4.08-7.487,11.442,11.442,0,0,1,7.407-2.788h.162A11.506,11.506,0,0,1,65.824,122.94Z\"\n              transform=\"translate(0 -92.25)\"\n            />\n          </svg>\n          <p class=\"icon-text\">Your Team</p>\n        </div>\n        <div (click)=\"gotoCreateSurvey()\" class=\"icon-2\">\n          <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            width=\"68.06\"\n            height=\"43.214\"\n            viewBox=\"0 0 45.364 59.101\"\n          >\n            <defs>\n              <style>\n                .a {\n                  fill: #002c53;\n                }\n              </style>\n            </defs>\n            <path\n              class=\"a\"\n              d=\"M104,19.319a.866.866,0,0,0,.866-.866V12.409a2.6,2.6,0,0,0-2.6-2.6H101.4V7.5a2.6,2.6,0,0,0-2.6-2.6h-.866V2.6a2.6,2.6,0,0,0-2.6-2.6H62.1a2.6,2.6,0,0,0-2.6,2.6V7.372a.866.866,0,0,0,1.731,0V2.6a.867.867,0,0,1,.866-.866H95.341a.867.867,0,0,1,.866.866V46.692a.867.867,0,0,1-.866.866H62.1a.867.867,0,0,1-.866-.866V11.066a.866.866,0,0,0-1.731,0V46.692a2.6,2.6,0,0,0,2.6,2.6h.866V51.6a2.6,2.6,0,0,0,2.6,2.6h.866V56.5a2.6,2.6,0,0,0,2.6,2.6h33.244a2.6,2.6,0,0,0,2.6-2.6V22.126a.866.866,0,1,0-1.731,0V56.5a.867.867,0,0,1-.866.866H69.023a.867.867,0,0,1-.866-.866V54.195h21.4a.866.866,0,0,0,0-1.731H65.56a.867.867,0,0,1-.866-.866V49.289H95.341a2.6,2.6,0,0,0,2.6-2.6V6.637H98.8a.867.867,0,0,1,.866.866V51.6a.867.867,0,0,1-.866.866H93.227a.866.866,0,1,0,0,1.731H98.8a2.6,2.6,0,0,0,2.6-2.6V11.543h.866a.867.867,0,0,1,.866.866v6.044A.866.866,0,0,0,104,19.319Z\"\n              transform=\"translate(-59.5)\"\n            />\n            <path\n              class=\"a\"\n              d=\"M110,112.5v6a1.329,1.329,0,0,0,1.327,1.327h6a1.329,1.329,0,0,0,1.327-1.327v-4.464l1.774-1.514a.866.866,0,0,0-1.124-1.317l-.8.682a1.329,1.329,0,0,0-1.178-.716h-6A1.329,1.329,0,0,0,110,112.5Zm1.731.4h5.194v.336l-1.718,1.466-.82-.889a.866.866,0,0,0-1.272,1.174l1.385,1.5a.866.866,0,0,0,1.2.071l1.227-1.048V118.1h-5.194V112.9Z\"\n              transform=\"translate(-104.171 -98.187)\"\n            />\n            <path\n              class=\"a\"\n              d=\"M221.717,124.5H207.866a.866.866,0,0,0,0,1.731h13.852a.866.866,0,0,0,0-1.731Z\"\n              transform=\"translate(-189.974 -110.129)\"\n            />\n            <path\n              class=\"a\"\n              d=\"M221.717,156.5H207.866a.866.866,0,0,0,0,1.731h13.852a.866.866,0,0,0,0-1.731Z\"\n              transform=\"translate(-189.974 -138.435)\"\n            />\n            <path\n              class=\"a\"\n              d=\"M110,216.83a1.329,1.329,0,0,0,1.327,1.327h6a1.329,1.329,0,0,0,1.327-1.327v-6a1.329,1.329,0,0,0-1.327-1.327h-6A1.329,1.329,0,0,0,110,210.827Zm1.731-5.6h5.194v5.194h-5.194Z\"\n              transform=\"translate(-104.171 -185.317)\"\n            />\n            <path\n              class=\"a\"\n              d=\"M221.717,221.5H207.866a.866.866,0,0,0,0,1.731h13.852a.866.866,0,0,0,0-1.731Z\"\n              transform=\"translate(-189.974 -195.932)\"\n            />\n            <path\n              class=\"a\"\n              d=\"M221.717,253.5H207.866a.866.866,0,0,0,0,1.731h13.852a.866.866,0,0,0,0-1.731Z\"\n              transform=\"translate(-189.974 -224.238)\"\n            />\n            <path\n              class=\"a\"\n              d=\"M110,313.83a1.329,1.329,0,0,0,1.327,1.327h6a1.329,1.329,0,0,0,1.327-1.327v-6a1.329,1.329,0,0,0-1.327-1.327h-6A1.329,1.329,0,0,0,110,307.827Zm1.731-5.6h5.194v5.194h-5.194Z\"\n              transform=\"translate(-104.171 -271.12)\"\n            />\n            <path\n              class=\"a\"\n              d=\"M221.717,318.5H207.866a.866.866,0,0,0,0,1.731h13.852a.866.866,0,0,0,0-1.731Z\"\n              transform=\"translate(-189.974 -281.735)\"\n            />\n            <path\n              class=\"a\"\n              d=\"M221.717,350.5H207.866a.866.866,0,0,0,0,1.731h13.852a.866.866,0,0,0,0-1.731Z\"\n              transform=\"translate(-189.974 -310.041)\"\n            />\n            <path\n              class=\"a\"\n              d=\"M152.315,35.5h-15.93a2.886,2.886,0,0,0,0,5.772h15.93a2.886,2.886,0,0,0,0-5.772Zm0,4.04h-15.93a1.154,1.154,0,0,1,0-2.309h15.93a1.154,1.154,0,0,1,0,2.309Z\"\n              transform=\"translate(-124.958 -31.402)\"\n            />\n          </svg>\n          <p class=\"icon-text\">Create Survey</p>\n        </div>\n        <div (click)=\"gotoViewAnswers()\" class=\"icon-3\">\n          <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            width=\"68.06\"\n            height=\"43.214\"\n            viewBox=\"0 0 57.675 57.675\"\n          >\n            <defs>\n              <style>\n                .a {\n                  fill: #002c53;\n                }\n              </style>\n            </defs>\n            <g transform=\"translate(0 19.6)\">\n              <path\n                class=\"a\"\n                d=\"M38.975,190.334a1.126,1.126,0,0,0-1.126,1.126v7.773a5.639,5.639,0,0,1-5.632,5.632H20.055a1.126,1.126,0,0,0-1.126,1.126l0,2.24-2.689-2.689a1.127,1.127,0,0,0-1.033-.677H7.885a5.639,5.639,0,0,1-5.632-5.632V181.885a5.639,5.639,0,0,1,5.632-5.632H19.262a1.126,1.126,0,1,0,0-2.253H7.885A7.894,7.894,0,0,0,0,181.885v17.347a7.894,7.894,0,0,0,7.885,7.885h6.743l4.626,4.626a1.126,1.126,0,0,0,1.923-.8l0-3.831H32.217a7.894,7.894,0,0,0,7.885-7.885V191.46A1.127,1.127,0,0,0,38.975,190.334Z\"\n                transform=\"translate(0 -174)\"\n              />\n            </g>\n            <g transform=\"translate(22.079)\">\n              <path\n                class=\"a\"\n                d=\"M215.224,0h-2.851a16.373,16.373,0,0,0,0,32.745h2.851a16.4,16.4,0,0,0,4.156-.533l4.211,4.209a1.126,1.126,0,0,0,1.923-.8V29.108a16.529,16.529,0,0,0,4.3-5.306,16.2,16.2,0,0,0,1.779-7.429A16.391,16.391,0,0,0,215.224,0Zm8.485,27.658a1.127,1.127,0,0,0-.449.9v4.348L220.5,30.151a1.126,1.126,0,0,0-1.127-.28,14.123,14.123,0,0,1-4.153.621h-2.851a14.12,14.12,0,1,1,0-28.239h2.851a14.12,14.12,0,0,1,8.485,25.406Z\"\n                transform=\"translate(-196)\"\n              />\n            </g>\n            <g transform=\"translate(35.423 7.892)\">\n              <path\n                class=\"a\"\n                d=\"M323.989,74.5a4.78,4.78,0,0,0-4.422-4.422,4.732,4.732,0,0,0-3.589,1.271,4.786,4.786,0,0,0-1.515,3.487,1.126,1.126,0,0,0,2.253,0,2.517,2.517,0,0,1,2.7-2.51,2.517,2.517,0,0,1,.372,4.965,2.132,2.132,0,0,0-1.679,2.089v2.706a1.126,1.126,0,1,0,2.253,0V79.467A4.744,4.744,0,0,0,323.989,74.5Z\"\n                transform=\"translate(-314.462 -70.063)\"\n              />\n            </g>\n            <g transform=\"translate(39.066 23.242)\">\n              <path\n                class=\"a\"\n                d=\"M348.723,206.66a1.127,1.127,0,1,0,.33.8A1.135,1.135,0,0,0,348.723,206.66Z\"\n                transform=\"translate(-346.8 -206.33)\"\n              />\n            </g>\n            <g transform=\"translate(6.083 34.92)\">\n              <path\n                class=\"a\"\n                d=\"M78.895,310H55.126a1.126,1.126,0,0,0,0,2.253H78.895a1.126,1.126,0,0,0,0-2.253Z\"\n                transform=\"translate(-54 -310)\"\n              />\n            </g>\n            <g transform=\"translate(29.851 41.228)\">\n              <path\n                class=\"a\"\n                d=\"M266.923,366.33a1.126,1.126,0,1,0,.33.8A1.134,1.134,0,0,0,266.923,366.33Z\"\n                transform=\"translate(-265 -366)\"\n              />\n            </g>\n            <g transform=\"translate(6.083 41.228)\">\n              <path\n                class=\"a\"\n                d=\"M74.464,366H55.126a1.126,1.126,0,0,0,0,2.253H74.464a1.126,1.126,0,0,0,0-2.253Z\"\n                transform=\"translate(-54 -366)\"\n              />\n            </g>\n            <g transform=\"translate(6.083 28.612)\">\n              <path\n                class=\"a\"\n                d=\"M71.573,254H55.126a1.126,1.126,0,1,0,0,2.253H71.573a1.126,1.126,0,1,0,0-2.253Z\"\n                transform=\"translate(-54 -254)\"\n              />\n            </g>\n          </svg>\n          <p class=\"icon-text\">View Answers</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "sesZ":
/*!*************************************************!*\
  !*** ./src/app/home-coach/home-coach.module.ts ***!
  \*************************************************/
/*! exports provided: HomeCoachPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCoachPageModule", function() { return HomeCoachPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_coach_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-coach-routing.module */ "/5jQ");
/* harmony import */ var _home_coach_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-coach.page */ "FXAy");







let HomeCoachPageModule = class HomeCoachPageModule {
};
HomeCoachPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_coach_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeCoachPageRoutingModule"]
        ],
        declarations: [_home_coach_page__WEBPACK_IMPORTED_MODULE_6__["HomeCoachPage"]]
    })
], HomeCoachPageModule);



/***/ })

}]);
//# sourceMappingURL=home-coach-home-coach-module-es2015.js.map