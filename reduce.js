function reduce(arr, callBack, initialValue) {
    if(initialValue === undefined){
        initialValue=arr[0];
        var i=1;
    }else{
        var i=0;
    }
  var accumulator = initialValue;
  for (; i < arr.length; i++) {
    accumulator = callBack(accumulator, arr[i], arr, i);
  }
  return accumulator;
}



function adder(accumulator, currentValue, arr, currentIndex) {
  return accumulator + currentValue;
}

function summation(accumulator, currentValue, arr, currentIndex) {
  return accumulator + currentValue.x;
}

function flatten(accumulator, currentValue, arr, currentIndex) {
  return accumulator.concat(currentValue);
}

var array2 = [{ x: 1 }, { x: 2 }, { x: 3 }];
var result=reduce(array2, summation,0);

var array = [1, 2, 4, 5, 6];

var unflattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];

var nameCount = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'ESD', 'Tiff', 'Bruce', 'Alice'];

function nameReducer(accumulator, currentValue, arr, currentIndex){
    if(currentValue in accumulator){
        accumulator[currentValue]++;
    }else{
        accumulator[currentValue]=1;
    }
    return accumulator;
}

var people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 },
    {name: 'ESD', age: 21},
    {name: 'Bob', age: 18},
    {name: 'Alex', age: 21}
  ];

  function groupByAge(accumulator, currentValue, arr, currentIndex){
      var key = currentValue['age'];
      if(!accumulator[key]){
          accumulator[key]=[];
      }
      accumulator[key].push(currentValue);
      return accumulator;
  }

  var result = reduce(people, groupByAge, {});

// var result = reduce(nameCount, nameReducer, {})

// var result = reduce(unflattened, flatten, []);
// var result = reduce(
//   unflattened,
//   function (accumulator, currentValue, arr, currentIndex) {
//     return accumulator.concat(currentValue);
//   }
// );

// var result=reduce(array, adder, 10);
console.log(result);
