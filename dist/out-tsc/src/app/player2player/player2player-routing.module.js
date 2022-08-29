import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Player2playerPage } from './player2player.page';
const routes = [
    {
        path: '',
        component: Player2playerPage
    }
];
let Player2playerPageRoutingModule = class Player2playerPageRoutingModule {
};
Player2playerPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], Player2playerPageRoutingModule);
export { Player2playerPageRoutingModule };
//# sourceMappingURL=player2player-routing.module.js.map