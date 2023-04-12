const fs = require('fs');
const path = require('path');

// __dirname : 현재 디렉토리의 절대경로
console.log(__dirname);

// 해당 경로에 있는 파일 목록의 배열
const files = fs.readdirSync(__dirname);

// 특정파일의 전체(절대)경로
// 문자열 합치는 것보다 join을 사용하는 것을 권장
result = path.join(__dirname, files[1]);
console.log(result);

// 해당 파일에 대한 정보를 알 수 있음
console.log(fs.statSync(result).isFile());