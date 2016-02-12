function Hamming(){

  this.compute  = function(string1 , string2){
    if(string1.length !== string2.length)
      throw 'DNA strands must be of equal length.';
      var count = 0;
    for(var i=0;i<string1.length;i++){
      if(string1[i]!== string2[i])
        count++;
    }
    return count;
  }
}
