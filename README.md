# typescript && comonjs demo 

##  for comonjs 
```bash
me.js  && me.d.ts

function me(name){
    this.name=name;
}
me.prototype.login=function(){
    return this.name;
}

module.exports=me;

declare class me{
    name: string;
    constructor(name: string);
    login(): string;
}
export = me;

```
or you use require and you must define reuqire funtion 
```bash
declare function require(params:string) :any;
```