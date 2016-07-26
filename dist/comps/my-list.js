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
const core_1 = require('angular2/core');
const my_service_1 = require("../services/my-service");
let MyList = class MyList {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.items = this.service.getDogs(5);
    }
};
MyList = __decorate([
    core_1.Component({
        selector: 'my-list',
        bindings: [my_service_1.MyService],
        template: `<ul><li *ngFor="#item of items">{{ item }}</li></ul>`,
        styles: [`
        :host {
            font-family: 'Arial';
            display: flex;
            width: 100%;
            height: 100%;
        }
    `]
    }), 
    __metadata('design:paramtypes', [my_service_1.MyService])
], MyList);
exports.MyList = MyList;
//# sourceMappingURL=my-list.js.map