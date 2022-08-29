import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateSurveyPageRoutingModule } from './create-survey-routing.module';
import { CreateSurveyPage } from './create-survey.page';
let CreateSurveyPageModule = class CreateSurveyPageModule {
};
CreateSurveyPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            CreateSurveyPageRoutingModule
        ],
        declarations: [CreateSurveyPage]
    })
], CreateSurveyPageModule);
export { CreateSurveyPageModule };
//# sourceMappingURL=create-survey.module.js.map