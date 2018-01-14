// declare  class user {
//     name: string;
//     constructor(name: string);
//     login(): string;
// }
declare module "user"{
  export = user;
}
export class user {
    name: string;
    constructor(name: string);
    login(): string;
}
//declare function require(params:string) :any;