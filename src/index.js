module.exports = 
function getZerosCount(number, base) {
  var b = base;  
  var primes = {};
  var temp = [];
  var res;
  next:
  for (var i = 2; i <= b; i++) {
  	while(true) {
  		if (b % i == 0) {
  			b /= i;
  			if (primes[i] === undefined) {
  				primes[i] = 1;
  			} else {
  				primes[i] += 1;
  			}
  		} else {
  			continue next;
  		}
  	}
  }  
 
  for (var key in primes) {
  	res = 0;  	
  	for (var j = +key; j <= number; j *= +key) {
  		res += Math.floor(number/j);  	
  	}  
  	temp.push(Math.floor(res/primes[key]));
  }

  return temp[temp.length-1];
}

//getZerosCount(10, 8);