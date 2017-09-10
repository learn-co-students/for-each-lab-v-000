
function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  const people = ['Jon', 'Amanda', 'Oscar'];
  people.forEach(callback);

  return people;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
