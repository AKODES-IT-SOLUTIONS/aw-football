import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Question2questionPage } from './question2question.page';
const routes = [
    {
        path: '',
        component: Question2questionPage
    }
];
let Question2questionPageRoutingModule = class Question2questionPageRoutingModule {
};
Question2questionPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], Question2questionPageRoutingModule);
export { Question2questionPageRoutingModule };
//# sourceMappingURL=question2question-routing.module.js.map