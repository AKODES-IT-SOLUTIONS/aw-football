import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewAnswersPage } from './view-answers.page';
const routes = [
    {
        path: '',
        component: ViewAnswersPage
    }
];
let ViewAnswersPageRoutingModule = class ViewAnswersPageRoutingModule {
};
ViewAnswersPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ViewAnswersPageRoutingModule);
export { ViewAnswersPageRoutingModule };
//# sourceMappingURL=view-answers-routing.module.js.map