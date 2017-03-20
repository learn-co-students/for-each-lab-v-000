//------------------------------------------------


var iterativeLog = (myArray) => {

  // debugger
  myArray.forEach(callBack = (element, index) =>{
    console.log(`${index}: ${element}`);
  }
);
}

var iterate = (callBack) =>{
  let theArray = ['seneca', 'epictitus', 'marcus'];
  theArray.forEach(callBack)
  return theArray;
}

var doToArray = (array,callBack) => {
  array.forEach(callBack);
}
