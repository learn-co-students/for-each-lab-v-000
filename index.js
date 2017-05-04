function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var kids = ['Torin', 'Madison', 'David']
  kids.forEach(callback);
  return kids;
}

function doToArray(array, callback) {
  array.forEach(callback);
}