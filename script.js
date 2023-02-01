console.log('Hello!');

let employees = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 27,
    joinedDate: 'December 15, 2017',
  },

  {
    firstName: 'Ana',
    lastName: 'Rosy',
    age: 25,
    joinedDate: 'January 15, 2019',
  },

  {
    firstName: 'Zion',
    lastName: 'Albert',
    age: 30,
    joinedDate: 'February 15, 2011',
  },
];
console.log(employees);
/// for 'number' key
// employees.sort((a, b) => {
//   return a.firstName - b.firstName;
// });

/// for 'String' key
// employees.sort((a, b) => {
//   let fa = a.firstName.toLowerCase(),
//     fb = b.firstName.toLowerCase();

//   if (fa < fb) {
//     return -1;
//   }
//   if (fa > fb) {
//     return 1;
//   }
//   return 0;
// });

employees.sort((a, b) =>
  a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase())
);

console.log(employees);
