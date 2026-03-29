const reverseString = function(text) {
    let array = text.split("");
    let reversed = [];
    for(let i = 0; i < array.length; i++) {
        reversed[i] = array[array.length - 1 - i]
    }
    return reversed.join("")
};

// Do not edit below this line
module.exports = reverseString;
