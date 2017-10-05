/* 
1. Declare a function named iterativeLog
2. Function accepts parameter named array, whose value is array.
3. When call function, log each element with the format ${index}: ${element}.
*/
function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}

/* 
1. Declare a function named iterate.
2. Function accepts parameter named callback, whose value is callback.
3. When call function, return new array.
*/
function iterate(callback) {
  const pets = ["dog", "cat", "bird"];
  pets.forEach(callback);
  return pets;
}

/* 
1. Declare a function named doToArray.
2. Function accepts 2 parameters named an array and a callback, whose values are an array and a callback. 
3. Call .forEach() on the array, passing the callback as the forEach callback.
*/
function doToArray(array, callback) {
  array.forEach(callback)
}

iterativeLog(["dog", "cat", "bird"]);
iterate(iterativeLog(["dog", "cat", "bird"]));
