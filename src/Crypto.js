function Crypto(text){
  var input = text;
  var self = this;
  this.normalizePlaintext = function(){
    input = input.replace(/\W/g, '');
    return input;
  }
  this.size = function(){
  return Math.round(Math.pow(input.length,0.5));
  }

  this.plaintextSegments = function(length) {
    self.normalizePlaintext();
  return input.match(new RegExp('.{1,' +self.size+ '}', 'g'));
}
  this.ciphertext = function(){
    var cipherText = '';
    var segments = self.plaintextSegments();
    for(var i=0;i<self.size;i++)
    {
      for(var j=0;j<segments.length;j++)
      {
        if(segments[j][i])
          cipherText+=segments[j][i]
      }
    }

    return cipherText;
  }
}
