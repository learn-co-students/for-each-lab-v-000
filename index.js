

function iterate(callback) {
  var ary = [];
  callback(ary);
  return ary 
}


function doToArray(array, callback) {
  array.forEach(callback);
}



function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}


