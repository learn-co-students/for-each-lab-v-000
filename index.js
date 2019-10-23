function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var tvShows = ["Arrow", "Stargate", "The Good Wife"];

  tvShows.forEach(callback);

  return tvShows;
}

function doToArray(array, callback) {
  array.forEach(callback);
  return array;
}