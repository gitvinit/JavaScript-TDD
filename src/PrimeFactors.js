function PrimeFactors(){
  this.for = function(n){
    if(n === 1)
    return [];
    var result = [];
    for (var i = 2; i*i <= n; i++) {

         // if i is a factor of N, repeatedly divide it out
         while (n % i == 0) {
             result.push(i);
             n = n / i;
         }
     }
     return result;
  }
}
