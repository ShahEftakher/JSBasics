function forEach(arr, callBack){
    for(var i=0;i<arr.length;i++){
        callBack(arr[i], i, arr);
    }
}



function add5(element, index, arr){
    arr[index]=element+5;
}

function printElement(element, index, arr){
    console.log(element);
}

var array=[1,2,3,4,5];
var cars=["bmw", "toyota", "abc"]

forEach(array, add5);
forEach(cars, printElement);

console.log(array);
