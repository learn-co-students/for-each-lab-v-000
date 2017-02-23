function iterativeLog(array){
  array.forEach( (e, i) =>{
    console.log( `${i}: ${e}`);
  })
}

function iterate(callback){
  let a = [1,2,3];
  a.forEach( i =>{
    callback(i);
  });
  return a;
}

function doToArray(array, callback){
  array.forEach( a => {
    callback(a);
  })
}