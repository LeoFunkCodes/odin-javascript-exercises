const palindromes = function (string) {
    const lettersAndNumbers = "abcdefghijklmnopqrstuvwxyz0123456789";

    const chars = string.toLowerCase().split("").filter(current => lettersAndNumbers.includes(current));
    
    const reversed = [...chars].reverse().join("");
    string = chars.join("");

    return reversed == string;
};

// Do not edit below this line
module.exports = palindromes;
