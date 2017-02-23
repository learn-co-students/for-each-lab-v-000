function iterativeLog(array) {
  array.forEach(logger);
}

function logger(element, index){
  console.log(`${index}: ${element}`);
}

function iterate(callback) {
  var pets = ['fish', 'dog', 'cat', 'bird'];
  pets.forEach(callback);
  return pets;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
