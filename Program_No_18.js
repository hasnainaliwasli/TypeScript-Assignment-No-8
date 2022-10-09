// 18. Write a ts program to search an element in an array.
var Arr19 = ["Hasnain", 3, 6, "Ali", 4, 6, "My Name"];
var toFind = 6;
// To know if value Exist or Not: Answer will be in True of False
function trueOrFalse(Array1, finded) {
    var find = Array1.includes(finded);
    return find;
}
console.log("Element exist: ", trueOrFalse(Arr19, toFind));
// To find the index of that element from first if exists.
console.log("The First index of Element is : ", Arr19.indexOf(toFind));
// To find the index of that element from last if exists.
console.log("The Last index of Element is : ", Arr19.lastIndexOf(toFind));
// Find the elements and return all the elements in a New Array
console.log("Searched Elements in an array: ", Arr19.filter(function (el) { return el === toFind; }));
