import { __decorate } from "tslib";
import { Component } from '@angular/core';
let YourTeamPage = class YourTeamPage {
    constructor(coachService) {
        this.coachService = coachService;
    }
    ngOnInit() {
        this.coachService.coach = JSON.parse(localStorage.getItem('user'));
        this.coachService.getPlayers();
    }
};
YourTeamPage = __decorate([
    Component({
        selector: 'app-your-team',
        templateUrl: './your-team.page.html',
        styleUrls: ['./your-team.page.scss'],
    })
], YourTeamPage);
export { YourTeamPage };
//# sourceMappingURL=your-team.page.js.map