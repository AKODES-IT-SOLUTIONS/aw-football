import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() openID: any;
  @Input() options: any;
  @Input() question: any;
  @Input() selectedOption: any;
  @Output() sendQuestionAns = new EventEmitter<any>();
  displayOption = false;
  name: any;
  answer: any;
  constructor() {}
  toggleSelect() {
    if (this.question.question_id === this.openID) {
      return true;
    } else {
      return false;
    }
  }
  onClickedOutside(e: Event) {
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
}
