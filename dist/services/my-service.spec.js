"use strict";
const testing_1 = require('angular2/testing');
const my_service_1 = require("./my-service");
testing_1.describe('MyService Tests', () => {
    let service = new my_service_1.MyService();
    testing_1.it('Should return a list of dogs', () => {
        var items = service.getDogs(4);
        testing_1.expect(items).toEqual(['golden retriever', 'french bulldog', 'german shepherd', 'alaskan husky']);
    });
    testing_1.it('Should get all dogs available', () => {
        var items = service.getDogs(100);
        testing_1.expect(items).toEqual(['golden retriever', 'french bulldog', 'german shepherd', 'alaskan husky', 'jack russel terrier', 'boxer', 'chow chow', 'pug', 'akita', 'corgi', 'labrador']);
    });
});
//# sourceMappingURL=my-service.spec.js.map