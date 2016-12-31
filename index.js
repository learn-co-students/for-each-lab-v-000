function iterativeLog(array){
  array.forEach((element, index, array) =>{
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  var menues = ["Curry", "Miso Soup", "Salad"]
  menues.forEach(callback)
  return menues
}

function doToArray(array, callback){
  array.forEach(callback)
}
