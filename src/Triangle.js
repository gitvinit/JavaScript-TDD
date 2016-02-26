function Triangle(first, second, third){
  this.kind = function(){
  if(first < 0 || second <0 || third <0)
  {
    throw "triangles with negative sides are illegal";
  }
  else if(first === 0 || second === 0 || third === 0)
  {
    throw "test triangles with no size are illegal";
  }
  else if (first+second <= third || second+third<= first || first+third<= second) {
    throw 'triangles violating triangle inequality are illegal 2';
  }
  else if(first === second && second === third && first === third){
    return 'equilateral';
  }
  else if(first === second || second === third || first === third){
    return 'isosceles';
  }
  else {
    return 'scalene';
  }
}
}
