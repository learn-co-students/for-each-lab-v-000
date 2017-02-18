var iterativeLog = (array) => {
  array.forEach(function(element, index) {
    console.log( `${index}: ${element}` ); 
  })
}

var iterate = (callback) => {
  var array = ["banana", "apple", "orange"]; 
  array.forEach(callback); 
  return array; 
}

var doToArray = (array, callback) => {
  array.forEach(callback); 
}
