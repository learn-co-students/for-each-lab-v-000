function iterativeLog(array) {
  array.forEach(function(element, index)
    {
      console.log(`${index}: ${element}`);
    })
}

function iterate(callback) {
  var ani = [`dogs`, `cats`, `frogs`]

  ani.forEach(callback)

  return ani
}

function doToArray(array, callback)  {
  array.forEach(callback)

}
