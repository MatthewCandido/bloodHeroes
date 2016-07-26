"use strict";
const testing_1 = require('angular2/testing');
const my_list_1 = require("./my-list");
const my_service_1 = require("../services/my-service");
testing_1.describe('MyList Tests', () => {
    let list;
    let service = new my_service_1.MyService();
    testing_1.beforeEach(() => {
        list = new my_list_1.MyList(service);
    });
    testing_1.it('Should get 5 dogs', () => {
        list.ngOnInit();
        testing_1.expect(list.items.length).toBe(5);
        testing_1.expect(list.items).toEqual(['golden retriever', 'french bulldog', 'german shepherd', 'alaskan husky', 'jack russel terrier']);
    });
});
//# sourceMappingURL=my-list.spec.js.map