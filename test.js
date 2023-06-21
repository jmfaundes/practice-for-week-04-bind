// Your code here
const { Employee } = require('./employee');

let employee = new Employee('John Wick', 'Dog Lover');

setTimeout(employee.sayName, 2000);
setTimeout(employee.sayName.bind(employee), 2000);

setTimeout(employee.sayOccupation, 3000);
setTimeout(employee.sayOccupation.bind(employee), 3000);
