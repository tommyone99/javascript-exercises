const findTheOldest = function(people) {
<<<<<<< HEAD
    //get current time for current age calculation
    const date = new Date();
    
    people.forEach(function (person) {

        if ("yearOfDeath" in person){
            person.lifeLived = Number(person.yearOfDeath - person.yearOfBirth);
        }
        else  {
            person.lifeLived = Number(date.getFullYear() - person.yearOfBirth);
        };
    });

    people.sort((a, b) => (a.lifeLived > b.lifeLived) ? 1 : -1);

    return people.pop();
=======

    people.forEach(person => {
        person.lifeLived = person.yearOfDeath - person.yearOfBirth;
    })

>>>>>>> f9697529911df452060dc0246cf91a173eb1f74d
    
};


// Do not edit below this line
module.exports = findTheOldest;
