import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthGuard = class AuthGuard {
    constructor(rest) {
        this.rest = rest;
    }
    canActivate(route, state) {
        return this.rest.isAuthenticated();
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map