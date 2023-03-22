let foo;
console.log(foo); // undefined

let obj = {};
console.log(obj.prop); // undefined

// 위에 두 변수는 선언을 하였으나, 이번에는 선언을 하지 않았다.
// console.log(bar);

let bar = null;
console.log(bar);

console.log(typeof null);
console.log(typeof undefined);

console.log(null == undefined);
console.log(null === undefined);