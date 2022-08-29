import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Player2playerPageRoutingModule } from './player2player-routing.module';
import { Player2playerPage } from './player2player.page';
let Player2playerPageModule = class Player2playerPageModule {
};
Player2playerPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            Player2playerPageRoutingModule
        ],
        declarations: [Player2playerPage]
    })
], Player2playerPageModule);
export { Player2playerPageModule };
//# sourceMappingURL=player2player.module.js.map