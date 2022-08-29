import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let SelectComponent = class SelectComponent {
    constructor() {
        this.sendQuestionAns = new EventEmitter();
        this.displayOption = false;
    }
    toggleSelect() {
        if (this.question.question_id === this.openID) {
            return true;
        }
        else {
            return false;
        }
    }
    onClickedOutside(e) {
        this.openID = null;
    }
    selectSurvey(answer) {
        this.answer = answer;
        this.sendToParent();
        this.openID = null;
        this.displayOption = false;
    }
    sendToParent() {
        this.sendQuestionAns.emit({ question: this.question, answer: this.answer });
    }
    ngOnInit() {
        this.answer = this.selectedOption;
        this.sendToParent();
    }
};
__decorate([
    Input()
], SelectComponent.prototype, "openID", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "options", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "question", void 0);
__decorate([
    Input()
], SelectComponent.prototype, "selectedOption", void 0);
__decorate([
    Output()
], SelectComponent.prototype, "sendQuestionAns", void 0);
SelectComponent = __decorate([
    Component({
        selector: 'app-select',
        templateUrl: './select.component.html',
        styleUrls: ['./select.component.scss'],
    })
], SelectComponent);
export { SelectComponent };
//# sourceMappingURL=select.component.js.map