// 17. Write a ts program to put even and odd elements of array in two separate array.
function evenAndOdd(Array) {
    var evenArr17 = [];
    var oddArr17 = [];
    for (var i = 0; i < Array.length; i++) {
        if (Array[i] % 2 == 0) {
            evenArr17.push(Array[i]);
        }
        else {
            oddArr17.push(Array[i]);
        }
    }
    console.log("Even Elemets: ", evenArr17);
    console.log("Odd Elements: ", oddArr17);
}
var Arr17 = [2, 3, 4, 1, 6, 7, 89, 4,];
evenAndOdd(Arr17);
