function iterativeLog(array) {
  array.forEach((element, index)=> {
  console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  const insects = ["bee", "cicada", "ant", "ladybug"]
  insects.forEach(callback);
  return insects
}

function doToArray(array, callback) {
  array.forEach(callback);
}
