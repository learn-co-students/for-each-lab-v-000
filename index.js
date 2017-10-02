
function iterativeLog(array) {
  array.forEach((e, i) => {
    console.log(`${i}: ${e}`)
  })
}
function iterate(callback){
  const guitars = ["Ibanez", "Gibson", "Fender", "Alvarez"]
  guitars.forEach(callback);

  return guitars
}

function doToArray(array, callback){
  array.forEach(callback);
}
