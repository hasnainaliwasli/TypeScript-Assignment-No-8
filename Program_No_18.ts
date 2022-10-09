// 18. Write a ts program to search an element in an array.


var Arr19:any[] = ["Hasnain",3,6,"Ali",4,6,"My Name"];
var toFind:any = 6;
// To know if value Exist or Not: Answer will be in True of False


function trueOrFalse(Array1:any[],finded:any ){

var find:boolean = Array1.includes(finded);

return find;

}

console.log("Element exist: ",trueOrFalse(Arr19,toFind));

// To find the index of that element from first if exists.

console.log("The First index of Element is : ",Arr19.indexOf(toFind));

// To find the index of that element from last if exists.

console.log("The Last index of Element is : ",Arr19.lastIndexOf(toFind));


// Find the elements and return all the elements in a New Array

console.log("Searched Elements in an array: ",Arr19.filter(el => el === toFind));





