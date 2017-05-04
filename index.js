function iterativeLog(array) {
    array.forEach((element,index) =>{
        console.log(`${index}: ${element}`)
    })
}

function iterate(callback) {
    var smells = ["good","bad","savory","yucky","delicious"]
    debugger
    smells.forEach(callback)
    return smells
}

function doToArray(array,callback) {
    array.forEach(callback)
}