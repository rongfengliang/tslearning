import app from "./app";
import {user} from "./user";
//const user =require("./user");
const appinfo =new app("ddd");
appinfo.name="dalongdemo"
const userapp =new user("ddd");
console.log(appinfo.printname());
console.log(userapp.login());
