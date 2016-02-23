function ETL(){
  var newObject = { };
  this.transform = function(input){
    for(var property in input){
      for(var i=0;i<input[property].length;i++)
      {
        newObject[input[property][i].toLowerCase()] = Number(property);
      }
    }
    return newObject;

  }
}
