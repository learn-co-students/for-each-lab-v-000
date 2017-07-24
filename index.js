function iterativeLog(array){
  array.forEach(function(element, index){
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback){
    var array = [1,2,3];
    array.forEach(function(){
      callback();
    })
    return array;
}

function doToArray(array, callback){
  array.forEach(function(){
    callback();
  })
}
