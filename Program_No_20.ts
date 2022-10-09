// 20. Write a ts program to sort even and odd elements of array separately.

var Arr20:number[] = [8,9,3,4,5,6,7,1,2];

var evenArray:number[]=[];
var oddArray:number[]=[];

for (var i=0; i<Arr20.length; i++){

  

    if(Arr20[i]%2==0){

        evenArray.push(Arr20[i])
    }
    else{
        oddArray.push(Arr20[i])
    }  
    
}

var sortedEven:number[] = evenArray.sort();
var sortedOdd:number[] = oddArray.sort();

console.log("Odd Elements: ",sortedOdd);
console.log("Even Elements: ",sortedEven);




