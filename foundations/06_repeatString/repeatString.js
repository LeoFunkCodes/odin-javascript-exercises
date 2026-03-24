const repeatString = function(string, num) {
    
    // handles when num < 2
    if(num < 2) {
        switch (num) {
            case 1:
                return string;
            case 0:
                return ""
            default:
                return "ERROR"
        }
    }

    let repeat = "";
    for(let i = 0; i < num; i++) {
        repeat = repeat.concat(string);
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
