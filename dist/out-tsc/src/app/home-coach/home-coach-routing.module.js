import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeCoachPage } from './home-coach.page';
const routes = [
    {
        path: '',
        component: HomeCoachPage
    }
];
let HomeCoachPageRoutingModule = class HomeCoachPageRoutingModule {
};
HomeCoachPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], HomeCoachPageRoutingModule);
export { HomeCoachPageRoutingModule };
//# sourceMappingURL=home-coach-routing.module.js.map