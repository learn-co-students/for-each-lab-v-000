function iterativeLog(array) {
  array.forEach((index, element) => {
    console.log(`${element}: ${index}`);
  });
}

function iterate(callback) {
  let cars = ['honda', 'toyota', 'nissan'];
  cars.forEach(callback);
  return cars;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
