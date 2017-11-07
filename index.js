function iterativeLog(array)
{
  array.forEach((value,index)=>
  {
  console.log(`${index}: ${value}`);
  })
}

function iterate(callback)
{
  myarray=["haroon", "what not"];
  myarray.forEach(callback);
  return myarray;
}

function doToArray(array,callback)
{
   array.forEach(callback);
}
