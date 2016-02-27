function Acronym(){
  this.parse = function(input){
    input=input.split('');
    var acronym = '';
    for(var i=0;i<input.length;i++)
    {
      if(isUpperCase(input[i]))
      {
        acronym+=input[i];
        continue;
      }
      else if(input[i-1] && (input[i-1] === ' '|| input[i-1]==='-'))
      {
        acronym+=input[i].toUpperCase();
        continue;
      }
      else if(input[i]===':')
      return acronym;
    }
    //console.log(acronym);
    return acronym;
  }

  function isUpperCase(character){
      return /[A-Z]/.test(character);
  }
}
