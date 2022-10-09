// 8. Write a ts program to copy all elements from an array to another array.

var Arr8:any  = [12,5,7,89,`Hasnain`, `Ali`];

var ArrNew:any =  [];

function arrayTransfer(q:any[] ,w:any[]){

    for(var i:number =0 ; i<q.length;i++){

       w.push(q[i])
    }
    return w;
}

console.log(arrayTransfer(Arr8,ArrNew));



// for(var i:number =0 ; i<Arr8.length;i++){

//     ArrNew.push(Arr8[i])
//  }


// console.log(ArrNew);

