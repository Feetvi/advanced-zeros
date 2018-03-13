//module.exports = 
function getZerosCount(number, base) {
  var b = base;
  var primes = [];
  var primes2 = {};
  next:
  for (var i = 2; i <= b; i++) {
  	while(true) {
  		if (b % i == 0) {
  			b /= i;
  			primes2[i] = primes2[i] === undefined ? 1 : primes2[i] + 1;
  			primes.push(i);
  		} else {
  			continue next;
  		}
  	}
  }
//  console.log('простые множители основания '+ base + ':', primes);
//  console.log('простые множители основания '+ base + ':', primes2);
  var arr2 = [];
  var result2 = 0;

 // console.log('sposob 1------------');
  for (var key in primes2) {
  	result2 = 0;
  	//console.log('ключ: '+ key);
  	for (var j = +key; j <= number; j *= +key) {
  		result2 += Math.floor(number/j);
  	//	console.log('результат: ' + result2);
  	}
  //	console.log(result2, primes2[key]);
  	arr2.push(Math.floor(result2/primes2[key]));
  }

 // console.log('sposob 2-----------');
  var arr = [];
  var result = 0;
  var deuce = 0;
  var fiver = 0;

  for (var i = 0; i < primes.length; i++) {
  	if (primes[i] === 2) {
  		deuce++;
  	} else if (primes[i] === 5) {
  		fiver++;
  	}
  }

  for (var i = 0; i < primes.length; i++) {
    	result = 0;
    	//console.log('ключ: '+ primes[i]);    	
    	if (primes[i] === 5) {
    		for (var j = primes[i]; j <= number; j *= primes[i]) {
    			result += Math.floor(number/j);
    	//		console.log('результат: '+result);
    		}

    		arr.push(Math.floor(result/fiver));
    	}
      if (primes[i] === 2) {
        for (var j = primes[i]; j <= number; j *= primes[i]) {
          result += Math.floor(number/j);
        //  console.log('результат: '+result);
        }

        arr.push(Math.floor(result/deuce));
      }
    	
    }

 // console.log('massiv 2: ' + arr2);
 // console.log('massiv 1: ' + arr);
 // console.log(arr.length);
  return arr[arr.length-1];
}


console.log(getZerosCount(10, 10));
//getZerosCount(10, 8);