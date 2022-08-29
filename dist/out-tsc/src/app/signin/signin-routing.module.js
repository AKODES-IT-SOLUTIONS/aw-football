import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SigninPage } from './signin.page';
const routes = [
    {
        path: '',
        component: SigninPage
    }
];
let SigninPageRoutingModule = class SigninPageRoutingModule {
};
SigninPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SigninPageRoutingModule);
export { SigninPageRoutingModule };
//# sourceMappingURL=signin-routing.module.js.map