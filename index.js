function iterativeLog(array) {
  array.forEach((el, index) => {
  console.log(`${index}: ${el}`)
  });
}

function iterate(callback) {
  var sammies = ["baloney", "gilled cheese", "spam"];
  sammies.forEach(callback);
  return sammies;
}

function doToArray(array, callback) {
  array.forEach(callback); 
}