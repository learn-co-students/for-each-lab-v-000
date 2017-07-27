function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var pets = ["Raiden", "Luke", "Kylo"];
  pets.forEach(callback);
  return pets;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
