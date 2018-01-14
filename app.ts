export default class app{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    printname():string{
     return this.name;
    }
}