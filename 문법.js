/*
  javascript에서 false로 처리되는 값들
  null, NaN, 0, 빈 문자열, undefined, false
*/

const a = 30;
console.log(a);
// a = 10;


// 함수
function add(n1, n2) {
  return n1 + n2;
}

result = add(1, 2);
console.log(result); // 3

plus = add; // plus도 add()의 역할을 할 수 있음.
result = plus(3, 4);
console.log(result); // 7

sub = function(n1, n2) {
  return n1 - n2;
}
result = sub(3, 2);
console.log(result); // 1