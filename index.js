
function iterativeLog (array) {
  array.forEach ((element, index) => {
  console.log (`${index}: ${element}`)
})
}

function iterate (callback){
var cities = ["New York",
              "San Francisco",
              "San Diego",
              "Escondido"]
cities.forEach (callback)
return cities
}

function doToArray (array, callback) {
array.forEach (callback)
}
