function filter(arr, callBack) {
  var output = [];
  for (var i = 0; i < arr.length; i++) {
    if (callBack(arr[i], i, arr)) {
      output.push(arr[i]);
    }
  }
  return output;
}




function filterItem(element, index, arr) {
  return element.toLowerCase().indexOf("an".toLowerCase()) !== -1;
}

function isAdult(element, index, arr) {
  return element >= 18;
}

function filterByID(element, index, arr) {
  if (Number.isFinite(element.id) && element.id !== 0) {
    return true;
  }
  return false;
}
var ID = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];
var fruits = ["apple", "banana", "grapes", "mango", "orange"];
var ages = [32, 33, 16, 40, 12, 15, 27];
var filtered = filter(fruits, filterItem);
var adult = filter(ages, isAdult);
var filteredID = filter(ID, filterByID);
console.log(filtered);
console.log(adult);
console.log(filteredID);
