"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var user_1 = require("./user");
var shortid = require("shortid");
var me = require("./me");
var meinfo = new me("rongfengliang");
//const user =require("./user"); // with require  and user must define require function
var appinfo = new app_1.default("ddd");
appinfo.name = "dalongdemo";
var userapp = new user_1.user("ddd");
console.log(appinfo.printname());
console.log(userapp.login());
console.log(shortid.generate());
console.log(meinfo.login());
