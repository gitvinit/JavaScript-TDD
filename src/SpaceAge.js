function SpaceAge(age){
this.seconds = age;
this.onEarth = function(){
  return age / 31557600;
}
this.onMercury = function(){
  return 0.2408467 * onEarth();
}
this.onVenus = function(){
  return 0.61519726 * onEarth();
}
this.onMars = function(){
  return 1.8808158 * onEarth();
}
this.onJupiter = function(){
  return 11.862615 * onEarth();
}
this.onSaturn = function(){
  return 29.447498 * onEarth();
}
this.onUranus = function(){
  return 84.016846 * onEarth();
}
this.onNeptune = function(){
  return 164.79132 * onEarth();
}
}
