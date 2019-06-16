function iterativeLog(arr){
  arr.forEach((el, i)=>console.log(`${i}: ${el}`));
}

function iterate(cb){
  let arr = ['uno', 'dos','tres']
  arr.forEach(cb)
  return arr;
}

function doToArray(arr, cb){
  arr.forEach(cb);
}
