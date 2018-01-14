function me(name){
    this.name=name;
}
me.prototype.login=function(){
    return this.name;
}
module.exports=me;