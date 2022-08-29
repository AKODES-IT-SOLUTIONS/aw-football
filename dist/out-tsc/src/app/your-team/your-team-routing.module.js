import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { YourTeamPage } from './your-team.page';
const routes = [
    {
        path: '',
        component: YourTeamPage
    }
];
let YourTeamPageRoutingModule = class YourTeamPageRoutingModule {
};
YourTeamPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], YourTeamPageRoutingModule);
export { YourTeamPageRoutingModule };
//# sourceMappingURL=your-team-routing.module.js.map