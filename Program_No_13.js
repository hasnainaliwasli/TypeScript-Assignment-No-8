// 13. Write a ts program to count total number of duplicate elements in an array.
var Arr11 = [2, 1, 44, 5, 3, 5];
for (var i = 0; i < Arr11.length; i++) {
    var count = 0;
    for (var j = 0; j < Arr11.length; j++) {
        if (Arr11[i] == Arr11[j]) {
            count = count + 1;
        }
    }
    console.log(Arr11[i], "Repeats", count, "Times.");
}
