import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewAnswersPageRoutingModule } from './view-answers-routing.module';
import { ViewAnswersPage } from './view-answers.page';
let ViewAnswersPageModule = class ViewAnswersPageModule {
};
ViewAnswersPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ViewAnswersPageRoutingModule
        ],
        declarations: [ViewAnswersPage]
    })
], ViewAnswersPageModule);
export { ViewAnswersPageModule };
//# sourceMappingURL=view-answers.module.js.map