function HelloWorld(){
  this.hello = function(input){
    if(!input)
      return "Hello, World!";

    return "Hello, "+input+"!";
  }
}
