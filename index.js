function iterativeLog(array){
    array.forEach(function(element,index){ console.log(`${index}: ${element}`)})
}

function iterate(callback){
  let testArray = ["apple", "watermelon", "Peach"];

  testArray.forEach(callback)

  return testArray
}


function doToArray(array, callback){

  array.forEach(callback)
}
