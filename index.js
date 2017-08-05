function iterativeLog(array) {
  array.forEach(function(element, index){
    console.log(`${index}: ${element}`)
  })
  }



  function iterate(callback) {
    var dogs = ["Foof", "Taz", "Boo"];
    dogs.forEach(callback)
    return dogs
  }

function doToArray(array, callback) {
array.forEach(callback)
}
