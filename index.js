function iterativeLog(array){
  array.forEach((element, index) => {console.log(`${index}: ${element}`)
   })
}

function iterate(callback){
const shoes = ["Nike", "Adidas", "Puma"]
shoes.forEach(callback);
return shoes
}

function doToArray(array, callback){
  array.forEach(callback);

}
