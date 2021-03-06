"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var AppService = (function () {
    function AppService(_http) {
        this._http = _http;
        this._url = "https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks";
        this._urlBase = "https://firestore.googleapis.com/v1beta1";
    }
    AppService.prototype.getData = function () {
        return this._http.get(this._url);
    };
    AppService.prototype.removeRow = function (postCont) {
        var delurl = this._urlBase + '/' + postCont.name;
        return this._http.delete(delurl);
    };
    AppService.prototype.submit = function (title, description) {
        var obj = {
            "fields": {
                "title": {
                    "stringValue": title
                },
                "description": {
                    "stringValue": description
                }
            }
        };
        return this._http.post(this._url, obj);
    };
    ;
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app-service.service.js.map