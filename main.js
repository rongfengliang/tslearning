"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var user_1 = require("./user");
//const user =require("./user");
var appinfo = new app_1.default("ddd");
appinfo.name = "dalongdemo";
var userapp = new user_1.user("ddd");
console.log(appinfo.printname());
console.log(userapp.login());