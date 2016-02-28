function Binary(input){
  this.toDecimal = function(){
    var j=0;
for(var i=0;i<input.length;i++){
    if(input[i] === '1'){
     j=j+ Math.pow(2,input.length-1-i);
 }

}
return Number(j);
  }
}
