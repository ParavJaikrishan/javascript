const chain = (num, arr) => {
    let outputArr = [arr[0](num)];
    for (let i = 1; i < arr.length; i++) {
        outputArr[i] = arr[i](outputArr[i - 1]);
    }
    return outputArr[outputArr.length - 1];
};

// Test case
function add(num) {
    return num + 1;
}
function mult(num) {
    return num * 30;
}
console.log(chain(2, [add, mult, add]));