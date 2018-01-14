function user(name){
  this.name=name;
}
user.prototype.login =function(){
    return this.name;
}
module.exports.user=user;