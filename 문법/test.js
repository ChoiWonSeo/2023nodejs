function test(s) {
  console.log('문자출력 ' + s);
}
test('a');



printChar = function(s) {
  console.log('익명함수 ' + s);
};
printChar('c');

// arrow 일반형
printArrow = (s) => {
  console.log(s);
};
printArrow('KK');

// 매개변수가 1개
printArrow2 = s => {
  return s;
};
console.log(printArrow2('JJ'));

// 리턴문 하나일 때
printArrow3 = s => s;
console.log(printArrow3('HH'));

let foo;
console.log(foo);