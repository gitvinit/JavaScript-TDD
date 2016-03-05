function Accumulate(input, accumulator){
  var arr = [];
  for(var val in input)
  {
    arr.push(accumulator(val));
  }
  return arr;
}
