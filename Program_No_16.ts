// 16. Write a ts program to find reverse of an array.

function reverseArr(Array:any[]){

    var reversed = Array.reverse()

    return reversed;
}

var Arr16:any[] = [1,2,3,"hasnain",4,"gg"]

console.log("Before Reverse: " ,Arr16);

console.log("After Reverse: ",reverseArr(Arr16))