function School() {
  var DB = {};
  this.roster = function(){
    for(var grade in DB) {
      DB[grade] = DB[grade].sort();
    }
    return DB;
  }

  this.add = function(name, grade){
    if(!DB.grade)
    {
      DB[grade] = [];
      DB[grade].push(name);
    }
    else{
      DB[grade].push(name);
    }

  }

  this.grade = function(input){
    if(!DB[input])
      return [];
    return DB[input].sort();
  }

}
