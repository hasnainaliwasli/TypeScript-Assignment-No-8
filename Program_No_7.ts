// 7. Write a ts program to count total number of negative elements in an array.

var Arr7:number[] = [2,3,-3,8,-5,-22,8,-44];

function isNeg(q:number[]){
    var neg:number = 0;
for(var i=0 ; i<q.length; i++){

    if(q[i]<0){
        neg = neg +1;
    }
}
return neg ;

}
console.log(isNeg(Arr7),`Elements are Negative.`);

