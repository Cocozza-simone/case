"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var accesso_data_service_1 = require("./accesso-data.service");
var node_test_1 = require("node:test");
node_test_1.describe('AccessoDataService', function () {
    var service;
    node_test_1.beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(accesso_data_service_1.AccessoDataService);
    });
    node_test_1.it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
