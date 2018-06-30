var iterativeLog = (array) => {
  array.forEach(  function(element) {
  console.log(`${array.indexOf(element)}: ${element}`)
  })
}

var iterate = (listItems) => {
  let array = [1,2,3]
  array.forEach(listItems)
  return array
}

var listItems = (element, index) => {
  console.log(`${index} : ${element}`)
}

var doToArray = (array, listItems) => {
  array.forEach(listItems)
}
