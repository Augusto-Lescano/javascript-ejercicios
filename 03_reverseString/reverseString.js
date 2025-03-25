const reverseString = function(str) {
  let normal=str.split('')
  let reverse=new Array(str.length)
  let reverseIndex=str.length-1
  for(let i=0;i<str.length;i++){
    reverse[i]=normal[reverseIndex]
    reverseIndex--
  }
  return reverse.join('')
};

console.log(reverseString('hello'))

// Do not edit below this line
module.exports = reverseString;
