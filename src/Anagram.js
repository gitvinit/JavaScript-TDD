function Anagram(input){
  var self = this;
  this.input = input;
  var result = [];
  this.matches = function(list){
    for(var i=0;i<list.length;i++)
    {
      if(self.input.split('').sort().join('') === list[i].split('').sort().join(''))
        result.push(list[i]);

    }

    return result;
  }
}
