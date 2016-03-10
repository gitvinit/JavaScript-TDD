function Octal(input){
  this.toDecimal = function(){
if(isNaN(Number(input)))
  return 0;

  var result = '';
for(var i=0;i<input.length;i++)
{
  result+=Number(input.charAt(i))*Math.pow(8,input.length-1-i);
}
return Number(result);
}
}
