import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { YourTeamPageRoutingModule } from './your-team-routing.module';
import { YourTeamPage } from './your-team.page';
let YourTeamPageModule = class YourTeamPageModule {
};
YourTeamPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            YourTeamPageRoutingModule
        ],
        declarations: [YourTeamPage]
    })
], YourTeamPageModule);
export { YourTeamPageModule };
//# sourceMappingURL=your-team.module.js.map