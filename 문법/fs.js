const fs = require('fs');

// __dirname : 현재 디렉토리의 절대경로
console.log(__dirname);

// 해당 경로에 있는 파일 목록의 배열
const files = fs.readdirSync(__dirname);
console.log(files);