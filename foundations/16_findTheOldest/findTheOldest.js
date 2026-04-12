const findTheOldest = function(people) {

    people.sort((a, b) => {

        const year = new Date().getFullYear();
        if(!a.yearOfDeath > 0 && !a.yearOfDeath < 99999) {
            a.yearOfDeath = year;
        }
        if(!(b.yearOfDeath > 0) && !(b.yearOfDeath < 99999)) {
            b.yearOfDeath = year;
        }

        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
    })

    return people[0];

};

// Do not edit below this line
module.exports = findTheOldest;
