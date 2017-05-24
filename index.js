function iterativeLog(array) {
    array.forEach((element, index) => {
        console.log(`${index}: ${element}`);
    });
}

function iterate(callback) {
    const arr = ["Why", "So", "Tired?"];

    arr.forEach(callback);

    return arr;
}

function doToArray(array, callback) {
    array.forEach(callback);
}
