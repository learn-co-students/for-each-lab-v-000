function iterativeLog(array){

  array.forEach((index, element) => {
    console.log(`${element}: ${index}`)
  });
}

function iterate(otherFunction){
  const bestRappers = ["Tupac", "Biggie", "Eminem", "Nas"]
    bestRappers.forEach(otherFunction)
    return bestRappers
}

function doToArray(array, callback){
  array.forEach(callback)
}
