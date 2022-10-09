// 20. Write a ts program to sort even and odd elements of array separately.
var Arr20 = [8, 9, 3, 4, 5, 6, 7, 1, 2];
var evenArray = [];
var oddArray = [];
for (var i = 0; i < Arr20.length; i++) {
    if (Arr20[i] % 2 == 0) {
        evenArray.push(Arr20[i]);
    }
    else {
        oddArray.push(Arr20[i]);
    }
}
var sortedEven = evenArray.sort();
var sortedOdd = oddArray.sort();
console.log("Odd Elements: ", sortedOdd);
console.log("Even Elements: ", sortedEven);
