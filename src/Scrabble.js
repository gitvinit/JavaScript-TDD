function Scrabble(){
  this.score = function(input){
    if(!input)
    return 0;
    var result = 0;
    for(var i=0; i<input.length;i++)
    {
      if(input[i].toUpperCase() in ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'])
      {
        result += 1;
      }
      else if(input[i].toUpperCase() in ['D', 'G'])
      {
        result += 2;
      }
      else if(input[i].toUpperCase() in ['B', 'C', 'M', 'P'])
      {
        result += 3;
      }
      else if(input[i].toUpperCase() in ['F', 'H', 'V', 'W', 'Y'])
      {
        result += 4;
      }
      else if(input[i].toUpperCase() === 'K')
      {
        result += 5;
      }
      else if(input[i].toUpperCase() in ['J', 'X'])
      {
        result += 8;
      }
      else if(input[i].toUpperCase() in ['Q','Z'])
      {
        result += 10;
      }
    }
    console.log(result);
    return result;
  }
}
