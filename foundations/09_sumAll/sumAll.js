const sumAll = function(start, end) {
    if(!Number.isInteger(start) || !Number.isInteger(end)) {
        return("ERROR")
    }
    if(start > end) {
        let saved = start;
        start = end;
        end = saved;
    }
    if(start < 0) {
        return("ERROR");
    }

    let acc = start + end;
    for(let i = start + 1; i < end; i++) {
        acc = acc + i;
    }
    return(acc);
};

// Do not edit below this line
module.exports = sumAll;
