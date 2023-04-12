const arr = ['apple', 'banana', 'cherry', 'apple'];

arr.forEach(function(data, index) {
  console.log(`${index} : ${data}`);
});

const cIndex = arr.findIndex(data => data === 'cherry')
console.log(cIndex);