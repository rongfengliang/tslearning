import app from "./app";
import {user} from "./user";
import shortid  =require("shortid");
import me  = require("./me");
const meinfo = new me("rongfengliang");
import user2 =require("./user"); // with require  and user must define require function
const appinfo =new app("ddd");
appinfo.name="dalongdemo"
const userapp =new user("ddd");
console.log(appinfo.printname());
console.log(userapp.login());
console.log(shortid.generate())
console.log(meinfo.login());
