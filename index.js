function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}



function iterate(callback) {
  var fears = ['clowns', 'sharks', 'open water', 'spiders']
  fears.forEach(callback)
  return fears
}

function doToArray(array, callback) {
  array.forEach(callback)
}





/*evens.forEach(even => {
  console.log(`${even} is not odd!`);
});*/
