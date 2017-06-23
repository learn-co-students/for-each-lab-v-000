function iterativeLog(array) {
    array.forEach(function(elem) {
        console.log(`${array.indexOf(elem)}: ${elem}`)})}


function iterate(callback) {
  var array = ['John','William','Brianna'];
  array.forEach(function(elem) {callback(elem)});
  return array;}

function doToArray(array,callback) {
  array.forEach(function(elem) {callback(elem)})}
