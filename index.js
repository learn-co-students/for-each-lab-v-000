function iterativeLog(array) {
    array.forEach((element, index) => {
        console.log(`${index}: ${element}`);
    });
}

function iterate(callback) {
    arr = ["Elliott", "Milena", "TBA", "Wally"];

    arr.forEach(callback);
    return arr;
};

function doToArray(array, callback) {
    array.forEach(callback);
};
