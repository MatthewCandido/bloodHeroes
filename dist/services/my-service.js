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
let MyService = class MyService {
    constructor() {
        this.animals = ['golden retriever', 'french bulldog', 'german shepherd', 'alaskan husky', 'jack russel terrier', 'boxer', 'chow chow', 'pug', 'akita', 'corgi', 'labrador'];
    }
    getDogs(count) {
        var result = [];
        if (count > this.animals.length)
            count = this.animals.length;
        for (var i = 0; i < count; i++) {
            result.push(this.animals[i]);
        }
        return result;
    }
};
MyService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], MyService);
exports.MyService = MyService;
//# sourceMappingURL=my-service.js.map