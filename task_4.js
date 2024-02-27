let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
//2nd way::::::::::::::::::::::::::::::
const propertyArray = Object.getOwnPropertyNames(student);
const count = propertyArray.length;
console.log("Numbers of keys : ", + count)

// 1st way:::::::::::::::::::::
// let count = 0;
// for (let key in student) {
//     if (student.hasOwnProperty(key)) {
//         count++;
//     }
// }
 
// console.log("Number of keys: " + count);

