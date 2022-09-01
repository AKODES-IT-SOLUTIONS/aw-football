(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["send-survey-send-survey-module"], {
    /***/
    "0ir2":
    /*!***************************************************!*\
      !*** ./src/app/send-survey/send-survey.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function ir2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headBg {\n  --background: #002c53;\n  --padding-bottom: 30px;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  padding: 12px;\n}\n\n.back-btn {\n  font-size: 20px;\n  padding: 10px 0 0 0;\n  fill: #fff;\n  cursor: pointer;\n}\n\n.backSvg {\n  fill: #fff;\n}\n\n.TopHead {\n  font-size: 25px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n}\n\n.container {\n  width: 80%;\n  margin: auto;\n}\n\n.main {\n  border-radius: 25px;\n  position: relative;\n  margin-top: -20px;\n  padding: 11px;\n  padding-top: 20px;\n  padding-left: 9px;\n  background: #f5f5f5;\n  z-index: 9999;\n}\n\n.check-box {\n  display: flex;\n  margin-bottom: 10px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.checkBox {\n  --background-checked: #002c53;\n  --checkmark-color: #fff;\n  --border-color: #002c53;\n  --border-color-checked: #002c53;\n  --border-radius: 7px;\n}\n\n.checkbox-label {\n  font-size: 14px;\n  margin-left: 20px;\n}\n\n.error {\n  color: red;\n  font-size: 14px;\n  padding-bottom: 5px;\n}\n\n.btn_send {\n  margin-top: 100px;\n  --background: #002c53;\n  font-weight: 300;\n  width: 100%;\n  color: #fff;\n  letter-spacing: 0;\n  --border-radius: 10px;\n}\n\n.list-title {\n  --padding-start: 20px;\n  --padding-end: 20px;\n  --padding-top: 15px;\n  --padding-bottom: 15px;\n  border-radius: 10px;\n  background-color: #dbdfe3;\n  color: #002c53;\n  font-size: 14px;\n  font-weight: 500;\n  margin-right: 10px;\n  width: 100%;\n}\n\n.list-item {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.notFoundDiv {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: center;\n}\n\n.notFound {\n  text-align: center;\n  font-weight: 500;\n  color: #002c53;\n  font-size: 15px;\n}\n\n.spinner-div {\n  display: flex;\n  justify-content: center;\n}\n\n.lds-ring {\n  display: inline-block;\n  position: relative;\n  width: 24px;\n  height: 24px;\n}\n\n.lds-ring div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  border: 4px solid #fff;\n  border-radius: 50%;\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #fff transparent transparent transparent;\n}\n\n.lds-ring div:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n\n.lds-ring div:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n\n.lds-ring div:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n\n@-webkit-keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.lds-ring2 {\n  display: inline-block;\n  position: relative;\n  width: 24px;\n  height: 24px;\n}\n\n.lds-ring2 div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  border: 4px solid #002c53;\n  border-radius: 50%;\n  -webkit-animation: lds-ring2 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring2 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #002c53 transparent transparent transparent;\n}\n\n.lds-ring2 div:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n\n.lds-ring2 div:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n\n.lds-ring2 div:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n\n@-webkit-keyframes lds-ring2 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-ring2 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlbmQtc3VydmV5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxVQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFLRjs7QUFEQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBSUY7O0FBRkE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUtGOztBQUhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQU1GOztBQUpBO0VBQ0UsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtBQU9GOztBQUxBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBUUY7O0FBTkE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBU0Y7O0FBUEE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFVRjs7QUFSQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFXRjs7QUFUQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFZRjs7QUFWQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFhRjs7QUFYQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWNGOztBQVhBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBY0Y7O0FBWkE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFlRjs7QUFiQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0VBQUE7VUFBQSw4REFBQTtFQUNBLHNEQUFBO0FBZ0JGOztBQWRBO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtBQWlCRjs7QUFmQTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtBQW1CRjs7QUFqQkE7RUFDRTtJQUNFLHVCQUFBO0VBb0JGO0VBbEJBO0lBQ0UseUJBQUE7RUFvQkY7QUFDRjs7QUExQkE7RUFDRTtJQUNFLHVCQUFBO0VBb0JGO0VBbEJBO0lBQ0UseUJBQUE7RUFvQkY7QUFDRjs7QUFsQkE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFvQkY7O0FBbEJBO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1RUFBQTtVQUFBLCtEQUFBO0VBQ0EseURBQUE7QUFxQkY7O0FBbkJBO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtBQXNCRjs7QUFwQkE7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FBdUJGOztBQXJCQTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUF3QkY7O0FBdEJBO0VBQ0U7SUFDRSx1QkFBQTtFQXlCRjtFQXZCQTtJQUNFLHlCQUFBO0VBeUJGO0FBQ0Y7O0FBL0JBO0VBQ0U7SUFDRSx1QkFBQTtFQXlCRjtFQXZCQTtJQUNFLHlCQUFBO0VBeUJGO0FBQ0YiLCJmaWxlIjoic2VuZC1zdXJ2ZXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRCZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDAyYzUzO1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuLmJhY2stYnRuIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZzogMTBweCAwIDAgMDtcclxuICBmaWxsOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYmFja1N2ZyB7XHJcbiAgZmlsbDogI2ZmZjtcclxufVxyXG4uVG9wSGVhZCB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4vLy9cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLm1haW4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIHBhZGRpbmc6IDExcHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA5cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICB6LWluZGV4OiA5OTk5O1xyXG59XHJcbi5jaGVjay1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcclxufVxyXG4uY2hlY2tCb3gge1xyXG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMDAyYzUzO1xyXG4gIC0tY2hlY2ttYXJrLWNvbG9yOiAjZmZmO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiAjMDAyYzUzO1xyXG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICMwMDJjNTM7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuLmNoZWNrYm94LWxhYmVsIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLmVycm9yIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5idG5fc2VuZCB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDAyYzUzO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5saXN0LXRpdGxlIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAtLXBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkZmUzO1xyXG4gIGNvbG9yOiAjMDAyYzUzO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ubGlzdC1pdGVtIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLm5vdEZvdW5kRGl2IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubm90Rm91bmQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMDAyYzUzO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4vL3NwaW5uZXJcclxuLnNwaW5uZXItZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5sZHMtcmluZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuLmxkcy1yaW5nIGRpdiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGFuaW1hdGlvbjogbGRzLXJpbmcgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxufVxyXG4ubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC40NXM7XHJcbn1cclxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XHJcbn1cclxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMykge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTVzO1xyXG59XHJcbkBrZXlmcmFtZXMgbGRzLXJpbmcge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbi5sZHMtcmluZzIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcbi5sZHMtcmluZzIgZGl2IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgIzAwMmM1MztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYW5pbWF0aW9uOiBsZHMtcmluZzIgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogIzAwMmM1MyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxufVxyXG4ubGRzLXJpbmcyIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNDVzO1xyXG59XHJcbi5sZHMtcmluZzIgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcclxufVxyXG4ubGRzLXJpbmcyIGRpdjpudGgtY2hpbGQoMykge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTVzO1xyXG59XHJcbkBrZXlmcmFtZXMgbGRzLXJpbmcyIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "KSpb":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/send-survey/send-survey.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function KSpb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-header>\n    <ion-toolbar class=\"headBg\">\n      <div class=\"header\">\n        <div class=\"back-btn\">\n          <svg\n            (click)=\"back()\"\n            class=\"backSvg\"\n            version=\"1.1\"\n            id=\"Capa_1\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            x=\"0px\"\n            y=\"0px\"\n            width=\"14.25px\"\n            height=\"20.43px\"\n            viewBox=\"0 0 792.082 792.082\"\n            style=\"enable-background: new 0 0 792.082 792.082\"\n            xml:space=\"preserve\"\n          >\n            <g>\n              <g id=\"_x37__34_\">\n                <g>\n                  <path\n                    d=\"M317.896,396.024l304.749-276.467c27.36-27.36,27.36-71.677,0-99.037s-71.677-27.36-99.036,0L169.11,342.161\n          c-14.783,14.783-21.302,34.538-20.084,53.897c-1.218,19.359,5.301,39.114,20.084,53.897l354.531,321.606\n          c27.36,27.36,71.677,27.36,99.037,0s27.36-71.677,0-99.036L317.896,396.024z\"\n                  />\n                </g>\n              </g>\n            </g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n            <g></g>\n          </svg>\n        </div>\n        <p class=\"TopHead\">Send Survey</p>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n  <div class=\"main\">\n    <div class=\"container\">\n      <div class=\"checkboxes\">\n        <div *ngIf=\"!isLoading\">\n          <div *ngIf=\"team.length === 0\" class=\"notFoundDiv\">\n            <p class=\"notFound\">No player Found!</p>\n          </div>\n        </div>\n        <div *ngIf=\"isLoading\" class=\"spinner-div\">\n          <div class=\"spinner\">\n            <div class=\"lds-ring2\">\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"check-box\" *ngFor=\"let player of team\">\n          <ion-checkbox\n            (ionChange)=\"addPlayers(player,$event)\"\n            class=\"checkBox\"\n          ></ion-checkbox>\n          <p class=\"checkbox-label\">{{player.user_name}}</p>\n        </div>\n      </div>\n      <p *ngIf=\"playerSelectError.status\" class=\"error\">\n        {{playerSelectError.message}}\n      </p>\n      <ion-button\n        [disabled]=\"sendingSurvey\"\n        *ngIf=\"team.length !== 0\"\n        (click)=\"send()\"\n        class=\"btn_send\"\n      >\n        <div *ngIf=\"sendingSurvey\" class=\"spinner\">\n          <div class=\"lds-ring\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n          </div>\n        </div>\n        <span *ngIf=\"!sendingSurvey\">SEND</span></ion-button\n      >\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "fUX3":
    /*!*************************************************!*\
      !*** ./src/app/send-survey/send-survey.page.ts ***!
      \*************************************************/

    /*! exports provided: SendSurveyPage */

    /***/
    function fUX3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SendSurveyPage", function () {
        return SendSurveyPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_send_survey_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./send-survey.page.html */
      "KSpb");
      /* harmony import */


      var _send_survey_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./send-survey.page.scss */
      "0ir2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/rest.service */
      "tnAE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* eslint-disable @typescript-eslint/naming-convention */


      var SendSurveyPage = /*#__PURE__*/function () {
        function SendSurveyPage(route, router, alertController, rest, navCtrl) {
          var _this = this;

          _classCallCheck(this, SendSurveyPage);

          this.route = route;
          this.router = router;
          this.alertController = alertController;
          this.rest = rest;
          this.navCtrl = navCtrl;
          this.sendingSurvey = false;
          this.survey = [];
          this.isLoading = true;
          this.coach = JSON.parse(localStorage.getItem('user'));
          this.displayInput = false;
          this.team = [];
          this.selectedPlayers = [];
          this.playerSelectError = {
            status: false,
            message: ''
          };
          this.error = {
            status: false,
            message: ''
          };
          this.surveyarray = [];
          this.totaltime = this.route.snapshot.params["time"];
          console.log('totaltime', this.totaltime); // this.survey_name = this.route.snapshot.params["survey_name"];
          // console.log('survey_name',this.survey_name);
          // this.questions_list = JSON.parse(this.route.snapshot.params["questions_list"])
          // console.log('questions_list',this.questions_list);

          this.route.queryParams.subscribe(function (params) {
            console.log('details', params);

            if (_this.router.getCurrentNavigation().extras.state) {
              _this.survey = _this.router.getCurrentNavigation().extras.state.selectedQuestions;
              console.log('survey question in constructor', _this.survey);
              _this.totaltime = _this.router.getCurrentNavigation().extras.state.time;
              console.log('survey time', _this.totaltime);
            } else {
              _this.router.navigate(['create-survey']);
            }
          });
        }

        _createClass(SendSurveyPage, [{
          key: "addPlayers",
          value: function addPlayers(player, checkbox) {
            console.log('players', player);

            if (checkbox.detail.checked) {
              this.selectedPlayers.push({
                player_id: player.users_id,
                user_name: player.user_name
              });
              console.log('selectedPlayers', this.selectedPlayers);
            } else {
              this.selectedPlayers = this.selectedPlayers.filter(function (pl) {
                return pl.player_id !== player.users_id;
              });
            }
          }
        }, {
          key: "getPlayers",
          value: function getPlayers() {
            var _this2 = this;

            this.rest.getPlayers({
              requestType: 'get_player',
              coach_id: this.coach.users_id
            }).subscribe(function (data) {
              console.log('players', data);

              if (data.status === 'Error') {
                _this2.team = [];
                _this2.isLoading = false;

                var _iterator = _createForOfIteratorHelper(data.team),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var player = _step.value;

                    if (player.status === 'Active') {
                      _this2.team.push(player);
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              } else {
                _this2.team = [];
                _this2.isLoading = false;

                var _iterator2 = _createForOfIteratorHelper(data.team),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var _player = _step2.value;

                    if (_player.status === 'Active') {
                      _this2.team.push(_player);
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            });
          }
        }, {
          key: "send",
          value: function send() {
            var _this3 = this;

            if (this.selectedPlayers.length === 0) {
              this.playerSelectError.status = true;
              this.playerSelectError.message = 'Please select players!';
              setTimeout(function () {
                _this3.playerSelectError.status = false;
                _this3.playerSelectError.message = '';
              }, 3000);
            } else {
              this.sendingSurvey = true;

              if (this.survey) {
                if (this.survey.length >= 1) {
                  // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
                  var sendRequestForArray = function sendRequestForArray(survey) {
                    var _this4 = this;

                    console.log('sendRequestForArray run');
                    that.rest.sendSurvey(Object.assign(Object.assign({
                      requestType: 'send_saved_surveys'
                    }, survey), {
                      players_list: that.selectedPlayers,
                      coach_id: that.coach.users_id
                    })).subscribe(function (data) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                interval++;

                                if (!(interval === that.survey.length)) {
                                  _context.next = 13;
                                  break;
                                }

                                console.log('survey send data', data);
                                that.sendingSurvey = false;
                                _context.next = 6;
                                return that.alertController.create({
                                  cssClass: 'sendSurvey',
                                  message: 'Your Survey is Forwarded.',
                                  backdropDismiss: false,
                                  buttons: [{
                                    text: 'Ok',
                                    handler: function handler() {
                                      that.navCtrl.navigateRoot('/home-coach');
                                      that.navCtrl.navigateForward('/home-coach');
                                    },
                                    cssClass: 'btn_ok'
                                  }]
                                });

                              case 6:
                                alert = _context.sent;
                                _context.next = 9;
                                return alert.present();

                              case 9:
                                _context.next = 11;
                                return alert.onDidDismiss();

                              case 11:
                                _context.next = 14;
                                break;

                              case 13:
                                sendRequestForArray(that.survey[interval]);

                              case 14:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      }));
                    }, function (error) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                that.sendingSurvey = false;
                                _context2.next = 3;
                                return that.alertController.create({
                                  message: 'Something went wrong!',
                                  backdropDismiss: false,
                                  buttons: [{
                                    text: 'Ok'
                                  }]
                                });

                              case 3:
                                alert = _context2.sent;
                                _context2.next = 6;
                                return alert.present();

                              case 6:
                                _context2.next = 8;
                                return alert.onDidDismiss();

                              case 8:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2);
                      }));
                    });
                  };

                  var interval = 0;
                  var that = this;
                  sendRequestForArray(this.survey[interval]);
                } else {
                  this.sendRequest(this.survey);
                }
              }
            }
          }
        }, {
          key: "back",
          value: function back() {
            this.navCtrl.navigateBack('/create-survey');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getPlayers();
          }
        }, {
          key: "sendRequest",
          value: function sendRequest(survey) {
            var _this5 = this;

            this.rest.sendSurvey(Object.assign(Object.assign({
              requestType: 'create_survey'
            }, survey), {
              players_list: this.selectedPlayers,
              coach_id: this.coach.users_id
            })).subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this6 = this;

                var alert;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        console.log('survey send data', data);
                        this.sendingSurvey = false;
                        _context3.next = 4;
                        return this.alertController.create({
                          cssClass: 'sendSurvey',
                          message: 'Your Survey is Forwarded.',
                          backdropDismiss: false,
                          buttons: [{
                            text: 'Ok',
                            handler: function handler() {
                              _this6.navCtrl.navigateRoot('/home-coach');

                              _this6.navCtrl.navigateForward('/home-coach');
                            },
                            cssClass: 'btn_ok'
                          }]
                        });

                      case 4:
                        alert = _context3.sent;
                        _context3.next = 7;
                        return alert.present();

                      case 7:
                        _context3.next = 9;
                        return alert.onDidDismiss();

                      case 9:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var alert;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        this.sendingSurvey = false;
                        _context4.next = 3;
                        return this.alertController.create({
                          message: 'Something went wrong!',
                          backdropDismiss: false,
                          buttons: [{
                            text: 'Ok'
                          }]
                        });

                      case 3:
                        alert = _context4.sent;
                        _context4.next = 6;
                        return alert.present();

                      case 6:
                        _context4.next = 8;
                        return alert.onDidDismiss();

                      case 8:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            });
          }
        }, {
          key: "sendRequestForArray",
          value: function sendRequestForArray(survey) {}
        }]);

        return SendSurveyPage;
      }();

      SendSurveyPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }];
      };

      SendSurveyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-send-survey',
        template: _raw_loader_send_survey_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_send_survey_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SendSurveyPage);
      /***/
    },

    /***/
    "i7nJ":
    /*!***************************************************!*\
      !*** ./src/app/send-survey/send-survey.module.ts ***!
      \***************************************************/

    /*! exports provided: SendSurveyPageModule */

    /***/
    function i7nJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SendSurveyPageModule", function () {
        return SendSurveyPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _send_survey_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./send-survey-routing.module */
      "ui2q");
      /* harmony import */


      var _send_survey_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./send-survey.page */
      "fUX3");

      var SendSurveyPageModule = function SendSurveyPageModule() {
        _classCallCheck(this, SendSurveyPageModule);
      };

      SendSurveyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _send_survey_routing_module__WEBPACK_IMPORTED_MODULE_5__["SendSurveyPageRoutingModule"]],
        declarations: [_send_survey_page__WEBPACK_IMPORTED_MODULE_6__["SendSurveyPage"]]
      })], SendSurveyPageModule);
      /***/
    },

    /***/
    "ui2q":
    /*!***********************************************************!*\
      !*** ./src/app/send-survey/send-survey-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: SendSurveyPageRoutingModule */

    /***/
    function ui2q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SendSurveyPageRoutingModule", function () {
        return SendSurveyPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _send_survey_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./send-survey.page */
      "fUX3");

      var routes = [{
        path: '',
        component: _send_survey_page__WEBPACK_IMPORTED_MODULE_3__["SendSurveyPage"]
      }];

      var SendSurveyPageRoutingModule = function SendSurveyPageRoutingModule() {
        _classCallCheck(this, SendSurveyPageRoutingModule);
      };

      SendSurveyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SendSurveyPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=send-survey-send-survey-module-es5.js.map