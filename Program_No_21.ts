// 21. Write a ts program to left rotate an array.

var Arr21:any[] = [0,1,2,3,4];

var first:any[]= [];
first.push(Arr21[0])
for(var i =0 ; i<Arr21.length;i++){

        Arr21[i]=Arr21[i+1]

}

Arr21[5] = first[0];

console.log(Arr21);