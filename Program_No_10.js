// 10. Write a ts program to delete an element from an array at specified position.
var Arr10 = ["Hasnain", 9, "Ali", "Number"];
/*Syntax:
    To Remove :    splice(Starting Index, How many elements Remove,Optional:If you want to add elements) */
console.log("Before Removing: ", Arr10);
Arr10.splice(1, 2);
console.log("After Removing: ", Arr10);
