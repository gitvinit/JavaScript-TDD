function Year(year){
  this.year = year;

  this.isLeap = function(){
  if(year%4===0&&year%400==00&&year%100===0)
  return true;

  return false;
}
}
