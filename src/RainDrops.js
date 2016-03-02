function RainDrops(){
  this.convert = function(input){
  var primefactors = new PrimeFactors();
  var result = primefactors.for(input);
  var response = '';
  for(var val in result)
  {
    if(val === 3)
    response+= 'Pling';
    else if (val === 5)
    response+= 'Plang';
    else if (val === 7)
    response+= 'Plong'
  }
  if(!response)
  return input+'';
}
}
