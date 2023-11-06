const findTheOldest = function(people) {

    people.forEach(person => {
        person.lifeLived = person.yearOfDeath - person.yearOfBirth;
    })

    
};

// Do not edit below this line
module.exports = findTheOldest;
