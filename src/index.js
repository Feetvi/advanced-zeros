module.exports = function getZerosCount(number, base) {
  var b = base;
  var num = number;
  var pow = 0;
  var res = 0;

  do {  	
  	base = base / 2;
  	pow++;  	
  } while (base / 2 >= 1); 
  	
  for (var i = 2; i < num; i *= 2) {
  //	console.log(i);
  	res += Math.floor(num / i);
 // 	console.log(res); 
  }

//  console.log(pow);
  res = Math.floor(res / pow);

  return res;
}


//console.log(getZerosCount(100, 16));