"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var auth_service_1 = require("./auth.service");
var node_test_1 = require("node:test");
node_test_1.describe('AuthService', function () {
    var service;
    node_test_1.beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(auth_service_1.AuthService);
    });
    node_test_1.it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
