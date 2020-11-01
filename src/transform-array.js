const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error('THROWN');
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
  if (arr[i] == '--discard-next') {
    return newArr.pop(arr[i - 1]);
  } else if(arr[i] == '--double-next') {
    return newArr.push(arr[i+1]);
  }
}
  
  // remove line with error and write your code here
};
