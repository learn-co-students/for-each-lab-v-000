function iterativeLog(array){
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });

}

function iterate(callback){
  var slowPokes = ["snail", "tortoise", "slug"];

  slowPokes.forEach(callback);
  return slowPokes;

}

function doToArray(array, callback){
  array.forEach(callback);
}
