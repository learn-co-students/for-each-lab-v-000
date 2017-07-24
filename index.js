function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  });
}

function iterate(callback) {
  let newArr = [
    "thing",
    "pants",
    "stuff"
  ];

  newArr.forEach(callback);
  return newArr;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
