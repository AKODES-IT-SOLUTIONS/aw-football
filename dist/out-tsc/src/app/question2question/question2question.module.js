import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Question2questionPageRoutingModule } from './question2question-routing.module';
import { Question2questionPage } from './question2question.page';
let Question2questionPageModule = class Question2questionPageModule {
};
Question2questionPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            Question2questionPageRoutingModule
        ],
        declarations: [Question2questionPage]
    })
], Question2questionPageModule);
export { Question2questionPageModule };
//# sourceMappingURL=question2question.module.js.map