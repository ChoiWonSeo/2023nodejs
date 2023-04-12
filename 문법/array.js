const arr = ['apple', 'banana', 'cherry', 'apple'];

arr.forEach(function(data, index) {
  console.log(`${index} : ${data}`);
});

// const cIndex = arr.findIndex(data => data === 'cherry')
const a = arr.indexOf('cherry', 3);
console.log(a);
// console.log(cIndex);

arr.push('grape');
// console.log(arr);

arr.pop();
console.log(x);
console.log(arr);