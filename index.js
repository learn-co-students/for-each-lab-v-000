function iterativeLog(array){
  array.forEach(function(element){
    var index = array.indexOf(element);
    console.log(index + ": " + element);
  });
}

function iterate(callback){
  var arr = [1,2,3];
  arr.forEach(callback);
  return arr;
}

function doToArray(array, callback){
  array.forEach(callback);
}
