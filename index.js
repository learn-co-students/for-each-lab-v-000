function iterativeLog(array) {
  array.forEach(element => {
    var item = element;
    var index = array.indexOf(item);
    console.log(`${index}: ${item}`);
  });
}

function iterate(callback) {
  var array = [1,2,3];
  array.forEach(num => {
    callback()
  })
  return array;
}

function doToArray(array, callback) {
  array.forEach(num => {
    callback()
  })
  return array;
}
