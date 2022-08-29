import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeCoachPageRoutingModule } from './home-coach-routing.module';
import { HomeCoachPage } from './home-coach.page';
let HomeCoachPageModule = class HomeCoachPageModule {
};
HomeCoachPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            HomeCoachPageRoutingModule
        ],
        declarations: [HomeCoachPage]
    })
], HomeCoachPageModule);
export { HomeCoachPageModule };
//# sourceMappingURL=home-coach.module.js.map