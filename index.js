function iterativeLog(array){
  array.forEach((value, index, array)=>{
    return console.log(`${index}: ${value}`)
  })
}

function iterate(callback){
  var arr = [1,2,3]
  result = callback(arr)
  return arr
}

function doToArray(array,callback){
  array.forEach((array)=>{
  callback(array)
  })
}