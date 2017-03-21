function iterativeLog(arr) {
  arr.forEach((el, i) => {
    console.log(`${i}: ${el}`);
  });
}

function iterate(callback) {
  arr = [1,2,3]
  arr.forEach(callback)
  return arr
}

function doToArray(arr, callback) {
  arr.forEach(callback)
}
