function somefunc(callback) {
  console.log("somefunc 실행");

  // somefunc의 기능을 수행하고 난 후에
  // callback()가 실행된다. 
  callback();
}

function cb() {
  console.log("콜백함수 실행");
}

// callback은 순서대로 실행되어야할 때 사용한다.
// 순서가 지켜지는
somefunc(function() {
  console.log("콜백함수 실행");
});