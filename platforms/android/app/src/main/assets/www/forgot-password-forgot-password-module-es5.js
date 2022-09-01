(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"], {
    /***/
    "2bN1":
    /*!*********************************************************!*\
      !*** ./src/app/forgot-password/forgot-password.page.ts ***!
      \*********************************************************/

    /*! exports provided: ForgotPasswordPage */

    /***/
    function bN1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function () {
        return ForgotPasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forgot-password.page.html */
      "l7ks");
      /* harmony import */


      var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgot-password.page.scss */
      "hxgU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/rest.service */
      "tnAE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* eslint-disable radix */

      /* eslint-disable max-len */


      var ForgotPasswordPage = /*#__PURE__*/function () {
        function ForgotPasswordPage(route, router, alertController, navCtrl, rest) {
          var _this = this;

          _classCallCheck(this, ForgotPasswordPage);

          this.route = route;
          this.router = router;
          this.alertController = alertController;
          this.navCtrl = navCtrl;
          this.rest = rest;
          this.count = 0;
          this.isLoading = false;
          this.displayEmailSend = true;
          this.displayPinCode = false;
          this.displayChangePassword = false;
          this.accountType = '';
          this.emailError = {
            status: false,
            message: ''
          };
          this.pinError = {
            status: false,
            message: ''
          };
          this.passError = {
            status: false,
            message: ''
          };
          this.newPassError = {
            status: false,
            message: ''
          };
          this.confPassError = {
            status: false,
            message: ''
          };
          this.recoveryEmail = '';
          this.pin1 = '';
          this.pin2 = '';
          this.pin3 = '';
          this.pin4 = '';
          this.newPassword = '';
          this.confirmPassword = '';
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.accountType = _this.router.getCurrentNavigation().extras.state.user;
            } else {
              _this.navCtrl.navigateBack('/home');
            }
          });
        }

        _createClass(ForgotPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.recoveryEmail = '';
            this.pin1 = '';
            this.pin2 = '';
            this.pin3 = '';
            this.pin4 = '';
            this.newPassword = '';
            this.confirmPassword = '';
          }
        }, {
          key: "sendEmail",
          value: function sendEmail() {
            var _this2 = this;

            if (this.recoveryEmail) {
              if (!this.validateEmail(this.recoveryEmail)) {
                this.emailError.status = true;
                this.emailError.message = 'Invalid Email address.';
                setTimeout(function () {
                  _this2.emailError.status = false;
                  _this2.emailError.message = '';
                }, 3000);
                return;
              } else {
                this.isLoading = true;
                this.rest.forgotEmail({
                  requestType: 'send_code',
                  email: this.recoveryEmail.trim()
                }).subscribe(function (data) {
                  _this2.isLoading = false;

                  if (data.status === 'success') {
                    _this2.displayEmailSend = false;
                    _this2.displayPinCode = true;
                    _this2.pin1 = '';
                    _this2.pin2 = '';
                    _this2.pin3 = '';
                    _this2.pin4 = '';
                  } else {
                    _this2.emailError.status = true;
                    _this2.emailError.message = data.msg;
                    setTimeout(function () {
                      _this2.emailError.status = false;
                      _this2.emailError.message = '';
                    }, 3000);
                  }
                }, function (error) {
                  _this2.isLoading = false;
                  _this2.emailError.status = true;
                  _this2.emailError.message = 'Something went wrong!';
                  setTimeout(function () {
                    _this2.emailError.status = false;
                    _this2.emailError.message = '';
                  }, 3000);
                });
              }
            }

            if (!this.recoveryEmail) {
              this.emailError.status = true;
              this.emailError.message = 'Email is required';
            }

            setTimeout(function () {
              _this2.emailError.status = false;
              _this2.emailError.message = '';
            }, 3000);
          }
        }, {
          key: "ok",
          value: function ok() {
            var _this3 = this;

            if (this.pin1 && this.pin2 && this.pin3 && this.pin4) {
              console.log(this.pin1 + this.pin2 + this.pin3 + this.pin4);

              if (!this.isANumber(this.pin1) || !this.isANumber(this.pin2) || !this.isANumber(this.pin3) || !this.isANumber(this.pin4)) {
                this.pinError.status = true;
                this.pinError.message = 'Pin should contain only numbers!';
                setTimeout(function () {
                  _this3.pinError.status = false;
                  _this3.pinError.message = '';
                }, 3000);
              } else {
                this.isLoading = true;
                this.rest.sendPinCode({
                  requestType: 'verify_code',
                  email: this.recoveryEmail,
                  code: this.pin1 + this.pin2 + this.pin3 + this.pin4
                }).subscribe(function (data) {
                  _this3.isLoading = false;

                  if (data.status === 'Found') {
                    _this3.pin1 = '';
                    _this3.pin2 = '';
                    _this3.pin3 = '';
                    _this3.pin4 = '';
                    _this3.displayPinCode = false;
                    _this3.displayChangePassword = true;
                  } else {
                    _this3.pinError.status = true;
                    _this3.pinError.message = 'Invalid pin code!';
                    setTimeout(function () {
                      _this3.pinError.status = false;
                      _this3.pinError.message = '';
                    }, 3000);
                  }
                }, function (error) {
                  _this3.isLoading = false;
                  _this3.pinError.status = true;
                  _this3.pinError.message = 'Something went wrong!';
                  setTimeout(function () {
                    _this3.pinError.status = false;
                    _this3.pinError.message = '';
                  }, 3000);
                });
              }
            } else {
              this.pinError.status = true;
              this.pinError.message = 'Pin is required';
              setTimeout(function () {
                _this3.pinError.status = false;
                _this3.pinError.message = '';
              }, 3000);
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (this.newPassword && this.confirmPassword) {
                        if (this.newPassword === this.confirmPassword) {
                          this.isLoading = true;
                          this.rest.resetPassword({
                            requestType: 'reset_password',
                            email: this.recoveryEmail,
                            password: this.newPassword,
                            type: this.accountType.toLowerCase()
                          }).subscribe(function (data) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                              var _this5 = this;

                              var alert;
                              return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      this.isLoading = false;

                                      if (!(data.status === 'success')) {
                                        _context.next = 18;
                                        break;
                                      }

                                      this.recoveryEmail = '';
                                      this.pin1 = '';
                                      this.pin2 = '';
                                      this.pin3 = '';
                                      this.pin4 = '';
                                      this.newPassword = '';
                                      this.confirmPassword = '';
                                      _context.next = 11;
                                      return this.alertController.create({
                                        cssClass: 'passwordReset',
                                        message: 'Your Password is Reset.',
                                        backdropDismiss: false,
                                        buttons: [{
                                          text: 'Ok',
                                          handler: function handler() {
                                            _this5.displayEmailSend = true;
                                            _this5.displayPinCode = false;
                                            _this5.displayChangePassword = false;

                                            _this5.router.navigate(['home']);
                                          },
                                          cssClass: 'btn_ok'
                                        }]
                                      });

                                    case 11:
                                      alert = _context.sent;
                                      _context.next = 14;
                                      return alert.present();

                                    case 14:
                                      _context.next = 16;
                                      return alert.onDidDismiss();

                                    case 16:
                                      _context.next = 21;
                                      break;

                                    case 18:
                                      this.passError.status = true;
                                      this.passError.message = 'Something went wrong!';
                                      setTimeout(function () {
                                        _this5.passError.status = false;
                                        _this5.passError.message = '';
                                      }, 3000);

                                    case 21:
                                    case "end":
                                      return _context.stop();
                                  }
                                }
                              }, _callee, this);
                            }));
                          }, function (error) {
                            _this4.isLoading = false;
                            _this4.passError.status = true;
                            _this4.passError.message = 'Something went wrong!';
                            setTimeout(function () {
                              _this4.passError.status = false;
                              _this4.passError.message = '';
                            }, 3000);
                          });
                        } else {
                          this.confPassError.status = true;
                          this.confPassError.message = 'Password not match!';
                          setTimeout(function () {
                            _this4.confPassError.status = false;
                            _this4.confPassError.message = '';
                          }, 3000);
                        }
                      }

                      if (!this.newPassword) {
                        this.newPassError.status = true;
                        this.newPassError.message = 'Password is required';
                      }

                      if (!this.confirmPassword) {
                        this.confPassError.status = true;
                        this.confPassError.message = 'Confirm Password is required';
                      }

                      setTimeout(function () {
                        _this4.newPassError.status = false;
                        _this4.newPassError.message = '';
                        _this4.confPassError.status = false;
                        _this4.confPassError.message = '';
                      }, 3000);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "isANumber",
          value: function isANumber(n) {
            var numStr = /^[0-9]+$/;
            return numStr.test(n.toString());
          }
        }, {
          key: "validateEmail",
          value: function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
          }
        }, {
          key: "back",
          value: function back() {
            if (this.displayEmailSend) {
              this.recoveryEmail = '';
              this.navCtrl.navigateRoot('/signin');
            }

            if (this.displayPinCode) {
              this.displayEmailSend = true;
              this.displayPinCode = false;
            }

            if (this.displayChangePassword) {
              this.displayPinCode = true;
              this.displayChangePassword = false;
            }
          }
        }, {
          key: "next",
          value: function next(e, elNext, elBack) {
            if (e.keyCode === 8) {
              this.count++;

              if (this.count === 2) {
                elBack.setFocus();
                this.count = 0;
              }
            } else {
              elNext.setFocus();
            }
          }
        }]);

        return ForgotPasswordPage;
      }();

      ForgotPasswordPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
        }];
      };

      ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ForgotPasswordPage);
      /***/
    },

    /***/
    "JgOp":
    /*!***********************************************************!*\
      !*** ./src/app/forgot-password/forgot-password.module.ts ***!
      \***********************************************************/

    /*! exports provided: ForgotPasswordPageModule */

    /***/
    function JgOp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function () {
        return ForgotPasswordPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgot-password-routing.module */
      "RtEn");
      /* harmony import */


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgot-password.page */
      "2bN1");

      var ForgotPasswordPageModule = function ForgotPasswordPageModule() {
        _classCallCheck(this, ForgotPasswordPageModule);
      };

      ForgotPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"]],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
      })], ForgotPasswordPageModule);
      /***/
    },

    /***/
    "RtEn":
    /*!*******************************************************************!*\
      !*** ./src/app/forgot-password/forgot-password-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ForgotPasswordPageRoutingModule */

    /***/
    function RtEn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function () {
        return ForgotPasswordPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot-password.page */
      "2bN1");

      var routes = [{
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
      }];

      var ForgotPasswordPageRoutingModule = function ForgotPasswordPageRoutingModule() {
        _classCallCheck(this, ForgotPasswordPageRoutingModule);
      };

      ForgotPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgotPasswordPageRoutingModule);
      /***/
    },

    /***/
    "hxgU":
    /*!***********************************************************!*\
      !*** ./src/app/forgot-password/forgot-password.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function hxgU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #f5f5f5;\n}\n\n.header {\n  display: flex;\n  padding-top: 5px;\n}\n\n.back-btn {\n  font-size: 20px;\n  padding: 10px 0 0 15px;\n  fill: #333;\n  cursor: pointer;\n}\n\n.backSvg {\n  fill: #333;\n}\n\n.container {\n  width: 80%;\n  margin: auto;\n}\n\n.row2 {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.row1 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 25px 0 0 0;\n  align-items: center;\n}\n\n.col-6-btn {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.btn_send,\n.btn_reset,\n.btn_ok {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --background: #002c53;\n  font-weight: 300;\n  color: #fff;\n  letter-spacing: 0;\n  --border-radius: 10px;\n}\n\n.image {\n  width: 200px !important;\n  height: 178px;\n}\n\n.heading {\n  margin: 48px 0 45px 0;\n  font-weight: 600;\n  font-size: 24px;\n  letter-spacing: 1.5px;\n}\n\n.inputsPin {\n  margin-bottom: 20px;\n}\n\n.error {\n  color: red;\n  font-size: 14px;\n  padding-bottom: 5px;\n}\n\n.input {\n  --padding-start: 20px;\n  --padding-end: 20px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  border-radius: 10px;\n  background-color: #fff;\n  color: #002c53;\n  font-size: small;\n  margin: auto;\n}\n\n.inputs {\n  margin-bottom: 20px;\n}\n\n.inputs > div {\n  margin-bottom: 15px;\n}\n\n.inputLabel {\n  width: 100%;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.pinLabel {\n  font-size: 14px;\n}\n\n.pinInput {\n  text-align: center;\n  background-color: #fff;\n  border-radius: 10px;\n  font-size: 14px;\n  width: 100%;\n  margin: 5px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n}\n\n.pincode {\n  display: flex;\n}\n\n.spinner-div {\n  display: flex;\n  justify-content: center;\n}\n\n.lds-ring {\n  display: inline-block;\n  position: relative;\n  width: 24px;\n  height: 24px;\n}\n\n.lds-ring div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  border: 4px solid #fff;\n  border-radius: 50%;\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #fff transparent transparent transparent;\n}\n\n.lds-ring div:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n\n.lds-ring div:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n\n.lds-ring div:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n\n@-webkit-keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsVUFBQTtBQUlGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUtGOztBQUZBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUtGOztBQUZBOzs7RUFHRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBS0Y7O0FBRkE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7QUFLRjs7QUFGQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFLRjs7QUFIQTtFQUNFLG1CQUFBO0FBTUY7O0FBSkE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBT0Y7O0FBTEE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBUUY7O0FBTkE7RUFDRSxtQkFBQTtBQVNGOztBQVBBO0VBQ0UsbUJBQUE7QUFVRjs7QUFSQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFXRjs7QUFUQTtFQUNFLGVBQUE7QUFZRjs7QUFWQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBYUY7O0FBWEE7RUFDRSxhQUFBO0FBY0Y7O0FBWEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFjRjs7QUFaQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWVGOztBQWJBO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzRUFBQTtVQUFBLDhEQUFBO0VBQ0Esc0RBQUE7QUFnQkY7O0FBZEE7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FBaUJGOztBQWZBO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBQWtCRjs7QUFoQkE7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FBbUJGOztBQWpCQTtFQUNFO0lBQ0UsdUJBQUE7RUFvQkY7RUFsQkE7SUFDRSx5QkFBQTtFQW9CRjtBQUNGOztBQTFCQTtFQUNFO0lBQ0UsdUJBQUE7RUFvQkY7RUFsQkE7SUFDRSx5QkFBQTtFQW9CRjtBQUNGIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZEJnIHtcclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbi5iYWNrLWJ0biB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMCAwIDE1cHg7XHJcbiAgZmlsbDogIzMzMztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJhY2tTdmcge1xyXG4gIGZpbGw6ICMzMzM7XHJcbn1cclxuXHJcbi8vL1xyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4ucm93MiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5yb3cxIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDI1cHggMCAwIDA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbC02LWJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnRuX3NlbmQsXHJcbi5idG5fcmVzZXQsXHJcbi5idG5fb2sge1xyXG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAtLWJhY2tncm91bmQ6ICMwMDJjNTM7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxNzhweDtcclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gIG1hcmdpbjogNDhweCAwIDQ1cHggMDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbn1cclxuLmlucHV0c1BpbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuLmlucHV0IHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAjMDAyYzUzO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5pbnB1dHMge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmlucHV0cyA+IGRpdiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uaW5wdXRMYWJlbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnBpbkxhYmVsIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnBpbklucHV0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDVweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAtLXBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLnBpbmNvZGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLy9zcGlubmVyXHJcbi5zcGlubmVyLWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubGRzLXJpbmcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcbi5sZHMtcmluZyBkaXYge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbmltYXRpb246IGxkcy1yaW5nIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcclxuICBib3JkZXItY29sb3I6ICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNDVzO1xyXG59XHJcbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xyXG59XHJcbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjE1cztcclxufVxyXG5Aa2V5ZnJhbWVzIGxkcy1yaW5nIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "l7ks":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function l7ks(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar class=\"headBg\">\n      <div class=\"header\">\n        <div class=\"back-btn\">\n          <svg\n            (click)=\"back()\"\n            class=\"backSvg\"\n            version=\"1.1\"\n            id=\"Capa_1\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            x=\"0px\"\n            y=\"0px\"\n            width=\"14.25px\"\n            height=\"20.43px\"\n            viewBox=\"0 0 792.082 792.082\"\n            style=\"enable-background: new 0 0 792.082 792.082\"\n            xml:space=\"preserve\"\n          >\n            <g>\n              <g id=\"_x37__34_\">\n                <g>\n                  <path\n                    d=\"M317.896,396.024l304.749-276.467c27.36-27.36,27.36-71.677,0-99.037s-71.677-27.36-99.036,0L169.11,342.161\n\t\t\t\tc-14.783,14.783-21.302,34.538-20.084,53.897c-1.218,19.359,5.301,39.114,20.084,53.897l354.531,321.606\n\t\t\t\tc27.36,27.36,71.677,27.36,99.037,0s27.36-71.677,0-99.036L317.896,396.024z\"\n                  />\n                </g>\n              </g>\n            </g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n          </svg>\n        </div>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"container\">\n    <div class=\"row1\">\n      <div class=\"col-6\">\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          width=\"242.667\"\n          height=\"218.249\"\n          viewBox=\"0 0 242.667 218.249\"\n        >\n          <defs>\n            <style>\n              .a {\n                fill: #002c53;\n              }\n              .b {\n                fill: #c91e53;\n              }\n            </style>\n          </defs>\n          <g transform=\"translate(-857.417 -1035.46)\">\n            <g transform=\"translate(857.417 1209.876)\">\n              <path\n                class=\"a\"\n                d=\"M865.228,1240.938a.735.735,0,0,1,.366-.443.7.7,0,0,1,.51-.043q7.617,2.725,15.328,5.071a.749.749,0,0,1,.494.372.818.818,0,0,1,.02.6q-.586,1.94-1.171,3.88a.831.831,0,0,1-.35.449.72.72,0,0,1-.647.069q-4.981-1.515-9.924-3.187-.814,2.407-1.628,4.814,3.706,1.254,7.432,2.419a.9.9,0,0,1,.48.33.645.645,0,0,1,.053.591l-1.161,3.742a.842.842,0,0,1-.352.448.671.671,0,0,1-.607.077q-3.8-1.19-7.581-2.467-1.2,3.555-2.4,7.112-.226.668-1.015.4-2.614-.891-5.219-1.823a.643.643,0,0,1-.381-.869Z\"\n                transform=\"translate(-857.417 -1240.422)\"\n              />\n              <path\n                class=\"a\"\n                d=\"M893.681,1262.015a11.9,11.9,0,0,1,1.32-3.1,12.588,12.588,0,0,1,2.051-2.558,13.3,13.3,0,0,1,2.615-1.951,13.083,13.083,0,0,1,3.015-1.254,13.946,13.946,0,0,1,3.282-.5,13.647,13.647,0,0,1,6.648,1.526,13.862,13.862,0,0,1,2.742,1.877,13.332,13.332,0,0,1,2.168,2.445,12.859,12.859,0,0,1,1.5,2.894,13.054,13.054,0,0,1,.725,3.2,11.767,11.767,0,0,1-.157,3.366,11.433,11.433,0,0,1-1.094,3.188,11.916,11.916,0,0,1-4.466,4.737,13.325,13.325,0,0,1-3.105,1.363,13.712,13.712,0,0,1-3.475.547,14.731,14.731,0,0,1-7.128-1.636,13.762,13.762,0,0,1-2.886-2.007,13.149,13.149,0,0,1-2.2-2.579,12.436,12.436,0,0,1-1.419-2.981,11.511,11.511,0,0,1-.134-6.576Zm6.523,1.677a6.537,6.537,0,0,0-.14,2.583,6.108,6.108,0,0,0,.846,2.327,6.356,6.356,0,0,0,1.726,1.832,7.334,7.334,0,0,0,5.239,1.2,6.3,6.3,0,0,0,2.357-.894,6.116,6.116,0,0,0,1.773-1.726,6.54,6.54,0,0,0,1-2.386,6.685,6.685,0,0,0,.048-2.578,6.336,6.336,0,0,0-2.59-4.107,7.011,7.011,0,0,0-5.06-1.162,6.369,6.369,0,0,0-4.118,2.568A6.682,6.682,0,0,0,900.2,1263.692Z\"\n                transform=\"translate(-862.76 -1242.244)\"\n              />\n              <path\n                class=\"a\"\n                d=\"M935.7,1270.776a11.972,11.972,0,0,1,.984-3.221,12.59,12.59,0,0,1,1.763-2.76,13.273,13.273,0,0,1,2.384-2.218,13.069,13.069,0,0,1,2.853-1.567,13.846,13.846,0,0,1,3.2-.839,13.515,13.515,0,0,1,6.741.815,13.8,13.8,0,0,1,2.912,1.578,13.194,13.194,0,0,1,2.4,2.2,12.873,12.873,0,0,1,1.784,2.721,13.08,13.08,0,0,1,1.052,3.1,11.827,11.827,0,0,1,.2,3.364,11.493,11.493,0,0,1-.752,3.285,11.915,11.915,0,0,1-3.931,5.181,13.276,13.276,0,0,1-2.935,1.682,13.574,13.574,0,0,1-3.385.91,14.577,14.577,0,0,1-7.228-.874,13.64,13.64,0,0,1-3.065-1.69,13.061,13.061,0,0,1-2.443-2.332,12.416,12.416,0,0,1-1.714-2.813,11.523,11.523,0,0,1-.876-3.156A11.666,11.666,0,0,1,935.7,1270.776Zm6.628.977a6.57,6.57,0,0,0,.13,2.584,6.127,6.127,0,0,0,1.079,2.224,6.309,6.309,0,0,0,1.9,1.639,7.271,7.271,0,0,0,5.312.642,6.3,6.3,0,0,0,2.242-1.139,6.138,6.138,0,0,0,1.577-1.9,6.583,6.583,0,0,0,.741-2.478,6.724,6.724,0,0,0-.221-2.568,6.34,6.34,0,0,0-2.993-3.811,6.6,6.6,0,0,0-2.51-.805,6.526,6.526,0,0,0-2.621.185,6.359,6.359,0,0,0-3.809,2.99A6.711,6.711,0,0,0,942.331,1271.753Z\"\n                transform=\"translate(-869.061 -1243.346)\"\n              />\n              <path\n                class=\"a\"\n                d=\"M976.926,1263.479a.661.661,0,0,1,.255-.509.823.823,0,0,1,.568-.164q8.952.5,17.919.527a.849.849,0,0,1,.533.181.73.73,0,0,1,.266.539q0,2.035,0,4.069a.9.9,0,0,1-.211.564.721.721,0,0,1-.6.269q-2.922-.008-5.844-.066-.177,8.972-.356,17.945a.745.745,0,0,1-.242.528.807.807,0,0,1-.611.225q-2.619-.057-5.239-.154a.882.882,0,0,1-.562-.243.688.688,0,0,1-.245-.56q.351-8.967.7-17.935-2.912-.114-5.822-.277a.759.759,0,0,1-.746-.878Q976.806,1265.511,976.926,1263.479Z\"\n                transform=\"translate(-875.192 -1243.757)\"\n              />\n              <path\n                class=\"a\"\n                d=\"M1012.507,1263.879a.775.775,0,0,1,.174-.555.71.71,0,0,1,.534-.223q5.528-.187,11.051-.557a7.205,7.205,0,0,1,2.8.351,7.411,7.411,0,0,1,2.4,1.324,7.321,7.321,0,0,1,1.741,2.107,6.727,6.727,0,0,1,.816,2.7,6.334,6.334,0,0,1-.2,2.313,6.04,6.04,0,0,1-.977,1.984,8.206,8.206,0,0,1,2.188,2.394,7.146,7.146,0,0,1,1.016,3.084,6.631,6.631,0,0,1-.357,2.872,7.562,7.562,0,0,1-1.464,2.481,7.874,7.874,0,0,1-2.339,1.8,7.571,7.571,0,0,1-2.941.809q-6.449.452-12.908.671a.882.882,0,0,1-.577-.153.639.639,0,0,1-.232-.525Q1012.87,1275.314,1012.507,1263.879Zm13.008,5.809a2.273,2.273,0,0,0-.251-.9,2.367,2.367,0,0,0-.578-.717,2.482,2.482,0,0,0-.847-.461,2.806,2.806,0,0,0-1.044-.122q-1.81.111-3.623.2.121,2.373.242,4.747,1.811-.092,3.622-.2a3.208,3.208,0,0,0,1.061-.239,2.281,2.281,0,0,0,1.287-1.335A2.3,2.3,0,0,0,1025.515,1269.687Zm1.584,9.436a2.562,2.562,0,0,0-.272-.966,2.891,2.891,0,0,0-.619-.836,2.954,2.954,0,0,0-.9-.571,2.375,2.375,0,0,0-1.085-.175q-2.293.147-4.588.265.14,2.733.279,5.468,2.331-.119,4.66-.269a2.5,2.5,0,0,0,1.06-.3,2.836,2.836,0,0,0,.821-.672,2.765,2.765,0,0,0,.509-.915A2.617,2.617,0,0,0,1027.1,1279.123Z\"\n                transform=\"translate(-880.53 -1243.715)\"\n              />\n              <path\n                class=\"a\"\n                d=\"M1055.1,1259.9a.489.489,0,0,1,.078-.226,1.2,1.2,0,0,1,.193-.243,1.212,1.212,0,0,1,.259-.195.8.8,0,0,1,.272-.1q2.115-.311,4.228-.649a.72.72,0,0,1,.505.094,2.127,2.127,0,0,1,.346.251l.563.854q6.141,10.24,12.84,20.263a.449.449,0,0,1,.047.534.926.926,0,0,1-.632.328q-2.53.477-5.067.918a1.2,1.2,0,0,1-.651-.029.891.891,0,0,1-.423-.4q-.5-.765-.966-1.524t-.942-1.528q-4.644.775-9.3,1.427-.217.875-.448,1.742t-.454,1.742a.89.89,0,0,1-.824.723q-2.619.35-5.241.66a.933.933,0,0,1-.579-.1q-.241-.137-.136-.479Q1052.25,1271.958,1055.1,1259.9Zm4.078,6.486q-.194.876-.38,1.882t-.365,2.028q-.18,1.02-.374,2.019t-.4,1.873q2.652-.387,5.3-.814Q1061.039,1269.89,1059.179,1266.386Z\"\n                transform=\"translate(-885.93 -1243.112)\"\n              />\n              <path\n                class=\"a\"\n                d=\"M1084.722,1254.689a.711.711,0,0,1,.581-.867q2.421-.54,4.835-1.115a.791.791,0,0,1,.552.07.7.7,0,0,1,.368.451l4.173,17.339q4.733-1.139,9.442-2.411a.825.825,0,0,1,.583.046.679.679,0,0,1,.365.462q.566,2.079,1.133,4.159a.738.738,0,0,1-.067.546.793.793,0,0,1-.5.39q-7.77,2.1-15.606,3.843-.773.171-.928-.534Z\"\n                transform=\"translate(-891.29 -1242.25)\"\n              />\n              <path\n                class=\"a\"\n                d=\"M1114.921,1246.692a.719.719,0,0,1,.045-.546.732.732,0,0,1,.469-.367q2.383-.733,4.758-1.5a.8.8,0,0,1,.557.025.7.7,0,0,1,.4.42l5.535,16.954q4.654-1.519,9.275-3.172a.831.831,0,0,1,.587,0,.672.672,0,0,1,.4.431q.732,2.028,1.46,4.057a.734.734,0,0,1-.024.549.8.8,0,0,1-.472.43q-7.624,2.726-15.339,5.1c-.507.156-.831,0-.971-.456Z\"\n                transform=\"translate(-895.788 -1240.991)\"\n              />\n            </g>\n            <g transform=\"translate(908.536 1035.46)\">\n              <path\n                class=\"a\"\n                d=\"M1032.179,1153.61h-4.966v-10.185h26.738v10.185h-6.112l-19.607,58.82h5.348v10.185H997.8V1212.43h4.965l-14.131-42.269L974.5,1212.43H979.6v10.185h-35.9V1212.43h5.348l-19.607-58.82h-6.11v-10.185H950.7v10.185h-5.6l16.68,50.162,16.806-50.162h-5.093v-10.185h30.174v10.185h-4.965l16.806,50.162Z\"\n                transform=\"translate(-918.358 -1051.55)\"\n              />\n              <path\n                class=\"a\"\n                d=\"M1026.079,1110.3l-19.478-58.82h6.238v-10.185H975.28v10.185h5.6L961.4,1110.3h-3.82v10.185h24.19V1110.3h-4.838l4.583-13.877h24.317l4.583,13.877h-4.838v10.185H1029.9V1110.3Zm-42.142-21.261,9.8-29.028,9.55,29.028Z\"\n                transform=\"translate(-923.463 -1036.329)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M999.115,1073.611l-5.475,17.7h10.823Zm0,6.875,2.929,8.53h-5.858Z\"\n                transform=\"translate(-928.837 -1041.145)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M1028.648,1104.592l-16.3-49.016h4.456v-20.116H969.446v20.116h3.947l-16.3,49.016h-5.348v19.989h8.022v-2.165h-5.858v-15.787h4.965l17.061-53.218H971.61v-15.787h43.033v15.787h-4.966l17.061,53.218h5.092v15.787h-5.346v2.165h7.383v-19.989Z\"\n                transform=\"translate(-922.594 -1035.459)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M1008.33,1109.368H987.45l-2.037,8.276h3.31v15.74h2.164v-17.778h-3.056l1.527-4.2h17.061l1.4,4.2h-3.056v17.778h2.164v-15.74h3.31Z\"\n                transform=\"translate(-927.611 -1046.474)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M1023.542,1155.542V1139.8h-2.164v17.9h3.056l-9.8,29.409-9.8-29.409h2.929v-20.069H996.8v-.046H980.764v2.164h24.7v15.787h-3.31l12.477,37.3,12.349-37.3Zm0,0V1139.8h-2.164v17.9h3.056l-9.8,29.409-9.8-29.409h2.929v-20.069H996.8v-.046H980.764v2.164h24.7v15.787h-3.31l12.477,37.3,12.349-37.3Zm-2.164-17.951v20.115h3.056l-9.8,29.409-9.8-29.409h2.929v-20.115H967.778v20.115h2.927l-9.675,29.792-9.931-29.792h3.565v-20.115H917.488v20.115h7.13l16.3,49.017h-2.928v19.988h45.579v-19.988h-2.929l7.13-20.243,7.129,20.243h-2.928v19.988h45.58v-19.988h-2.928l16.3-49.017h7v-20.115Zm34.376,17.951H1049.9l-18.207,53.218h3.693v15.787H994.132V1208.76h3.31l-9.675-26.736-9.676,26.736h3.31v15.787h-41.25V1208.76h3.692l-18.206-53.218h-5.985v-15.787h32.976v15.787h-4.074l12.35,37.3,12.477-37.3h-3.437v-15.787h35.521v15.787h-3.31l12.477,37.3,12.349-37.3h-3.438v-15.787h32.212Zm-32.212,0V1139.8h-2.164v17.9h3.056l-9.8,29.409-9.8-29.409h2.929v-20.069H996.8v-.046H980.764v2.164h24.7v15.787h-3.31l12.477,37.3,12.349-37.3Zm0,0V1139.8h-2.164v17.9h3.056l-9.8,29.409-9.8-29.409h2.929v-20.069H996.8v-.046H980.764v2.164h24.7v15.787h-3.31l12.477,37.3,12.349-37.3Z\"\n                transform=\"translate(-917.488 -1050.68)\"\n              />\n            </g>\n            <g transform=\"translate(911.943 1080.031)\">\n              <path\n                class=\"a\"\n                d=\"M932.662,1087.837l2.637,8.116h8.533l-6.9,5.016,2.637,8.116-6.9-5.016-6.9,5.016,2.637-8.116-6.9-5.016h8.533Z\"\n                transform=\"translate(-921.492 -1087.837)\"\n              />\n              <path\n                class=\"a\"\n                d=\"M1063.424,1087.837l2.637,8.116h8.533l-6.9,5.016,2.637,8.116-6.9-5.016-6.9,5.016,2.637-8.116-6.9-5.016h8.533Z\"\n                transform=\"translate(-940.979 -1087.837)\"\n              />\n            </g>\n          </g>\n        </svg>\n      </div>\n      <p class=\"heading\">FORGOT PASSWORD?</p>\n    </div>\n    <div class=\"row2\">\n      <div class=\"col-6-btn\">\n        <div *ngIf=\"displayEmailSend\" class=\"inputs\">\n          <ion-label class=\"inputLabel\" position=\"stacked\"\n            >Enter Your Email</ion-label\n          >\n          <ion-input\n            [(ngModel)]=\"recoveryEmail\"\n            class=\"input\"\n            value=\"\"\n            type=\"email\"\n            placeholder=\"Email Address\"\n          ></ion-input>\n          <p *ngIf=\"emailError.status\" class=\"error\">{{emailError.message}}</p>\n        </div>\n        <div *ngIf=\"displayPinCode\" [class.inputsPin]=\"displayPinCode\">\n          <p\n            [class.pinLabel]=\"displayPinCode\"\n            [class.inputLabel]=\"!displayPinCode\"\n          >\n            Enter 4 digits code that you received on your email.\n          </p>\n          <div class=\"pincode\">\n            <ion-input\n              #Field1\n              (keyup)=\"next($event,Field2,Field1)\"\n              class=\"pinInput\"\n              maxlength=\"1\"\n              size=\"1\"\n              type=\"tel\"\n              value=\"\"\n              [(ngModel)]=\"pin1\"\n              placeholder=\"0\"\n            ></ion-input>\n            <ion-input\n              #Field2\n              (keyup)=\"next($event,Field3,Field1)\"\n              class=\"pinInput\"\n              maxlength=\"1\"\n              size=\"1\"\n              [(ngModel)]=\"pin2\"\n              type=\"tel\"\n              value=\"\"\n              placeholder=\"0\"\n            ></ion-input>\n            <ion-input\n              #Field3\n              (keyup)=\"next($event,Field4,Field2)\"\n              class=\"pinInput\"\n              maxlength=\"1\"\n              size=\"1\"\n              [(ngModel)]=\"pin3\"\n              type=\"tel\"\n              value=\"\"\n              placeholder=\"0\"\n            ></ion-input>\n            <ion-input\n              #Field4\n              (keyup)=\"next($event,Field4,Field3)\"\n              class=\"pinInput\"\n              maxlength=\"1\"\n              size=\"1\"\n              [(ngModel)]=\"pin4\"\n              type=\"tel\"\n              value=\"\"\n              placeholder=\"0\"\n            ></ion-input>\n          </div>\n          <p *ngIf=\"pinError.status\" class=\"error\">{{pinError.message}}</p>\n        </div>\n        <div *ngIf=\"displayChangePassword\" class=\"inputs\">\n          <div>\n            <p *ngIf=\"newPassError.status\" class=\"error\">\n              {{newPassError.message}}\n            </p>\n            <ion-input\n              [(ngModel)]=\"newPassword\"\n              class=\"input\"\n              value=\"\"\n              type=\"password\"\n              placeholder=\"New Password\"\n            ></ion-input>\n          </div>\n          <div>\n            <p *ngIf=\"confPassError.status\" class=\"error\">\n              {{confPassError.message}}\n            </p>\n            <ion-input\n              [(ngModel)]=\"confirmPassword\"\n              class=\"input\"\n              value=\"\"\n              type=\"password\"\n              placeholder=\"Confirm New Password\"\n            ></ion-input>\n          </div>\n          <p *ngIf=\"passError.status\" class=\"error\">{{passError.message}}</p>\n        </div>\n\n        <ion-button\n          [disabled]=\"isLoading\"\n          *ngIf=\"displayEmailSend\"\n          (click)=\"sendEmail()\"\n          class=\"btn_send\"\n        >\n          <div *ngIf=\"isLoading\" class=\"spinner\">\n            <div class=\"lds-ring\">\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n            </div>\n          </div>\n          <span *ngIf=\"!isLoading\">SEND</span>\n        </ion-button>\n\n        <ion-button\n          [disabled]=\"isLoading\"\n          *ngIf=\"displayPinCode\"\n          (click)=\"ok()\"\n          class=\"btn_ok\"\n        >\n          <div *ngIf=\"isLoading\" class=\"spinner\">\n            <div class=\"lds-ring\">\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n            </div>\n          </div>\n          <span *ngIf=\"!isLoading\">OK</span>\n        </ion-button>\n\n        <ion-button\n          [disabled]=\"isLoading\"\n          *ngIf=\"displayChangePassword\"\n          (click)=\"reset()\"\n          class=\"btn_reset\"\n        >\n          <div *ngIf=\"isLoading\" class=\"spinner\">\n            <div class=\"lds-ring\">\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n            </div>\n          </div>\n          <span *ngIf=\"!isLoading\">RESET</span>\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=forgot-password-forgot-password-module-es5.js.map