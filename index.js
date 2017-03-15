function iterativeLog(array) {
  array.forEach((arr, index, array) => {
    console.log(`${index}: ${arr}`);
  })
}


function iterate(callback) {
  var array = ["Larry", "Curly", "Moe"];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
  return array;
}
