function iterativeLog(array){
  array.forEach((element, index, array) => {
  console.log(`${index}: ${element}`);
  });
}

function iterate(callback){
  var my_array = [45,76,87,23,12,98]
  my_array.forEach(callback)
  return my_array

}
function doToArray(array,callback){
  array.forEach(callback);
}
