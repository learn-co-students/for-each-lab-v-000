function iterativeLog(array) {
  array.forEach((elem, index, array) => {
    console.log(`${index}: ${elem}`);
  });
}
function iterate(callback) {
  var newArray = ['araf','array'];
  callback(newArray);
  return newArray;
}
function doToArray(array, callback){
  array.forEach(callback);
}
