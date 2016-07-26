import {Component, OnInit} from 'angular2/core';
import {MyService} from "../services/my-service";
 
@Component({
    selector: 'my-list',
    bindings: [MyService],
    template: `<ul><li *ngFor="#item of items">{{ item }}</li></ul>`,
    styles: [`
        :host {
            font-family: 'Arial';
            display: flex;
            width: 100%;
            height: 100%;
        }
    `]
})
export class MyList implements OnInit {
    items:Array<string>;
    service:MyService;
 
    constructor(service:MyService) {
        this.service = service;
    }
 
    ngOnInit() {
        this.items = this.service.getDogs(5);
    }
}