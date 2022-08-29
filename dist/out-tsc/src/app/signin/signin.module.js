import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SigninPageRoutingModule } from './signin-routing.module';
import { SigninPage } from './signin.page';
let SigninPageModule = class SigninPageModule {
};
SigninPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SigninPageRoutingModule
        ],
        declarations: [SigninPage]
    })
], SigninPageModule);
export { SigninPageModule };
//# sourceMappingURL=signin.module.js.map