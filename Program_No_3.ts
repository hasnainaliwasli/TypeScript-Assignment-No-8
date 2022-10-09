// 3. Write a ts program to find sum of all array elements. 

// var Arr3:number[] = [1,2,6,-4,-3,8];
// var sum:number = 0 ;
// var i:number = 0;
// while(i<Arr3.length){

//     sum = sum+Arr3[i];
//     i++;
// }

// console.log(sum);


var Arr3:number[] = [2,-4,-7,2,-6,-9];

function negative(element:number ,index:number,array:number[]){

    return (element<0);
}
var returned:number[] = Arr3.filter(negative);

console.log(returned);






