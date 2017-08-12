function iterativeLog(array){
  array.forEach(
    (item, index)=> { console.log(`${index}: ${item}`)}
  )
}

function iterate(callback){
  var arr = ["food", "water"]

  arr.forEach(callback)

  return arr
}

function doToArray(array,callback){
  array.forEach(
    (item) => { callback(item) } )
}
