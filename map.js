function map(arr, callBack) {
    var output=[];
    for (var i = 0; i < arr.length; i++) {
        output.push(callBack(arr[i], i, arr));
    }
    return output;
}




function changeObject(element, index, arr){
    var rObj = {}
   rObj[element.key] = element.value
   return rObj;
}

function add5(element, index, arr){
    return element+5;
}

var objArray=[{key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}];
var array=[10,20,30,40,50];

var modifiedObjArray=map(objArray, changeObject);
var modifiedArray=map(array, add5);

console.log(modifiedArray);
console.log(modifiedObjArray);