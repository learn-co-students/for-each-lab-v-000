function iterativeLog(array) {
  array.forEach((element, i) => {
    console.log(`${i}: ${element}`)
  })
}

 function iterate(callback) {
   var people = ["Leslie", "Ben", "Donna", "Tom", "Ron"]
   people.forEach(callback)
   return people
 }

function doToArray(array, callback) {
  array.forEach(callback)
}
