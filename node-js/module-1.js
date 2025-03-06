const people = ['John', 'Sara', 'Jack' , 'Bob' , 'Mike'];
const ages = [23, 34, 45, 56, 67];
//console.log(people);

// for exporting single value
module.exports = people;

// for exporting multiple values
module.exports = {
    people: people,
    ages: ages
};
