function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}
function iterate(callback) {
  var grades = [12, 78, 56, 98]
  grades.forEach(callback)
  return grades
}
function doToArray(array, callback) {
  array.forEach(callback)
}
