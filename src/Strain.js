function Strain(){
    var arr = [];
  this.keep = function(arrayInput, callback){

    for(var index in arrayInput)
    {
      if(callback(arrayInput[index]))
      {
      arr.push(arrayInput[index]);
    }
    }
    return arr;
  }

  this.discard = function(arrayInput, callback){

    for(var index in arrayInput)
    {
      if(!callback(arrayInput[index]))
      {
      arr.push(arrayInput[index]);
    }
    }
    return arr;
  }

}
