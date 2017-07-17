function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  var array = [`dogs`, 3, `cats`];
  array.forEach(callback);
  return array
}

function doToArray(array, callback){
  array.forEach(callback);
}
