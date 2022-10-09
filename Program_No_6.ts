// 6. Write a ts program to count total number of even and odd elements in an array.

var Arr6:number[] =[2,3,5,6,77,88,99,2,-3,0] ;
var ArrEven:number[] =[];
var ArrOdd:number [] = [];
for(var i=0; i<Arr6.length; i++){

if(Arr6[i]!=0 && Arr6[i]>0)
{
    if(Arr6[i]%2==0){
        // console.log(`Even Elements: `,Arr6[i]);
        ArrEven.push(Arr6[i])
    }
    else{

        // console.log(`Odd Elements`,Arr6[i]);
        ArrOdd.push(Arr6[i])
        
    }


}}

console.log(`Even Elements: `, ArrEven);
console.log(`Odd Elements: `,ArrOdd);

