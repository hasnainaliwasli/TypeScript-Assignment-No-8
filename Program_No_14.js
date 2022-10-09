// 14. Write a ts program to delete all duplicate elements from an array.
var Arr14 = [1, 2, 3, 4, 2];
// function getUnique(array:any[]){
var uniqueArray = [];
for (var i = 0; i < Arr14.length; i++) {
    if (uniqueArray.indexOf(Arr14[i]) == -1) {
        uniqueArray.push(Arr14[i]);
        // console.log(Arr14[i]);
    }
}
console.log(uniqueArray);
//  getUnique(Arr14)
// console.log(uniqueElements);
