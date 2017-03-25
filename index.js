 function iterativeLog(arr) {
   arr.forEach((el, i) => console.log(`${i}: ${el}`));
 }

 function iterate(callback) {
   var arr = ["hot", 'stuff', 12];
   arr.forEach(callback)
   return arr;
 }

 function doToArray(arr, callback) {
   arr.forEach(callback);
 }
