function iterativeLog(array){
  array.forEach((el, i) =>{
    console.log(`${i}: ${el}`)
  })
}

function iterate(callback){
  var noodles = ["spaghetti", "rice noodles", "bowtie"]
  noodles.forEach(callback)
  return noodles
}

function doToArray(array, callback){
  array.forEach(callback)
}
