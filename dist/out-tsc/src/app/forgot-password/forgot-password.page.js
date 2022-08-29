import { __awaiter, __decorate } from "tslib";
/* eslint-disable radix */
/* eslint-disable max-len */
import { Component } from '@angular/core';
let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(route, router, alertController, navCtrl, rest) {
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
            message: '',
        };
        this.pinError = {
            status: false,
            message: '',
        };
        this.passError = {
            status: false,
            message: '',
        };
        this.newPassError = {
            status: false,
            message: '',
        };
        this.confPassError = {
            status: false,
            message: '',
        };
        this.recoveryEmail = '';
        this.pin1 = '';
        this.pin2 = '';
        this.pin3 = '';
        this.pin4 = '';
        this.newPassword = '';
        this.confirmPassword = '';
        this.route.queryParams.subscribe((params) => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.accountType = this.router.getCurrentNavigation().extras.state.user;
            }
            else {
                this.navCtrl.navigateBack('/home');
            }
        });
    }
    ngOnInit() {
        this.recoveryEmail = '';
        this.pin1 = '';
        this.pin2 = '';
        this.pin3 = '';
        this.pin4 = '';
        this.newPassword = '';
        this.confirmPassword = '';
    }
    sendEmail() {
        if (this.recoveryEmail) {
            if (!this.validateEmail(this.recoveryEmail)) {
                this.emailError.status = true;
                this.emailError.message = 'Invalid Email address.';
                setTimeout(() => {
                    this.emailError.status = false;
                    this.emailError.message = '';
                }, 3000);
                return;
            }
            else {
                this.isLoading = true;
                this.rest
                    .forgotEmail({
                    requestType: 'send_code',
                    email: this.recoveryEmail.trim(),
                })
                    .subscribe((data) => {
                    this.isLoading = false;
                    if (data.status === 'success') {
                        this.displayEmailSend = false;
                        this.displayPinCode = true;
                        this.pin1 = '';
                        this.pin2 = '';
                        this.pin3 = '';
                        this.pin4 = '';
                    }
                    else {
                        this.emailError.status = true;
                        this.emailError.message = data.msg;
                        setTimeout(() => {
                            this.emailError.status = false;
                            this.emailError.message = '';
                        }, 3000);
                    }
                }, (error) => {
                    this.isLoading = false;
                    this.emailError.status = true;
                    this.emailError.message = 'Something went wrong!';
                    setTimeout(() => {
                        this.emailError.status = false;
                        this.emailError.message = '';
                    }, 3000);
                });
            }
        }
        if (!this.recoveryEmail) {
            this.emailError.status = true;
            this.emailError.message = 'Email is required';
        }
        setTimeout(() => {
            this.emailError.status = false;
            this.emailError.message = '';
        }, 3000);
    }
    ok() {
        if (this.pin1 && this.pin2 && this.pin3 && this.pin4) {
            console.log(this.pin1 + this.pin2 + this.pin3 + this.pin4);
            if (!this.isANumber(this.pin1) ||
                !this.isANumber(this.pin2) ||
                !this.isANumber(this.pin3) ||
                !this.isANumber(this.pin4)) {
                this.pinError.status = true;
                this.pinError.message = 'Pin should contain only numbers!';
                setTimeout(() => {
                    this.pinError.status = false;
                    this.pinError.message = '';
                }, 3000);
            }
            else {
                this.isLoading = true;
                this.rest
                    .sendPinCode({
                    requestType: 'verify_code',
                    email: this.recoveryEmail,
                    code: this.pin1 + this.pin2 + this.pin3 + this.pin4,
                })
                    .subscribe((data) => {
                    this.isLoading = false;
                    if (data.status === 'Found') {
                        this.pin1 = '';
                        this.pin2 = '';
                        this.pin3 = '';
                        this.pin4 = '';
                        this.displayPinCode = false;
                        this.displayChangePassword = true;
                    }
                    else {
                        this.pinError.status = true;
                        this.pinError.message = 'Invalid pin code!';
                        setTimeout(() => {
                            this.pinError.status = false;
                            this.pinError.message = '';
                        }, 3000);
                    }
                }, (error) => {
                    this.isLoading = false;
                    this.pinError.status = true;
                    this.pinError.message = 'Something went wrong!';
                    setTimeout(() => {
                        this.pinError.status = false;
                        this.pinError.message = '';
                    }, 3000);
                });
            }
        }
        else {
            this.pinError.status = true;
            this.pinError.message = 'Pin is required';
            setTimeout(() => {
                this.pinError.status = false;
                this.pinError.message = '';
            }, 3000);
        }
    }
    reset() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.newPassword && this.confirmPassword) {
                if (this.newPassword === this.confirmPassword) {
                    this.isLoading = true;
                    this.rest
                        .resetPassword({
                        requestType: 'reset_password',
                        email: this.recoveryEmail,
                        password: this.newPassword,
                        type: this.accountType.toLowerCase(),
                    })
                        .subscribe((data) => __awaiter(this, void 0, void 0, function* () {
                        this.isLoading = false;
                        if (data.status === 'success') {
                            this.recoveryEmail = '';
                            this.pin1 = '';
                            this.pin2 = '';
                            this.pin3 = '';
                            this.pin4 = '';
                            this.newPassword = '';
                            this.confirmPassword = '';
                            const alert = yield this.alertController.create({
                                cssClass: 'passwordReset',
                                message: 'Your Password is Reset.',
                                backdropDismiss: false,
                                buttons: [
                                    {
                                        text: 'Ok',
                                        handler: () => {
                                            this.displayEmailSend = true;
                                            this.displayPinCode = false;
                                            this.displayChangePassword = false;
                                            this.router.navigate(['home']);
                                        },
                                        cssClass: 'btn_ok',
                                    },
                                ],
                            });
                            yield alert.present();
                            yield alert.onDidDismiss();
                        }
                        else {
                            this.passError.status = true;
                            this.passError.message = 'Something went wrong!';
                            setTimeout(() => {
                                this.passError.status = false;
                                this.passError.message = '';
                            }, 3000);
                        }
                    }), (error) => {
                        this.isLoading = false;
                        this.passError.status = true;
                        this.passError.message = 'Something went wrong!';
                        setTimeout(() => {
                            this.passError.status = false;
                            this.passError.message = '';
                        }, 3000);
                    });
                }
                else {
                    this.confPassError.status = true;
                    this.confPassError.message = 'Password not match!';
                    setTimeout(() => {
                        this.confPassError.status = false;
                        this.confPassError.message = '';
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
            setTimeout(() => {
                this.newPassError.status = false;
                this.newPassError.message = '';
                this.confPassError.status = false;
                this.confPassError.message = '';
            }, 3000);
        });
    }
    isANumber(n) {
        const numStr = /^[0-9]+$/;
        return numStr.test(n.toString());
    }
    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    back() {
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
    next(e, elNext, elBack) {
        if (e.keyCode === 8) {
            this.count++;
            if (this.count === 2) {
                elBack.setFocus();
                this.count = 0;
            }
        }
        else {
            elNext.setFocus();
        }
    }
};
ForgotPasswordPage = __decorate([
    Component({
        selector: 'app-forgot-password',
        templateUrl: './forgot-password.page.html',
        styleUrls: ['./forgot-password.page.scss'],
    })
], ForgotPasswordPage);
export { ForgotPasswordPage };
//# sourceMappingURL=forgot-password.page.js.map