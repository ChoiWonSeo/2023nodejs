const fs = require('fs');
const path = require('path');

// dirPath에 있는 모든 파일목록의 배열(하위경로까지)
function getAllFiles(dirPath, arrOfFiles) {
  // dirPath에 있는 모든 파일목록의 배열(하위경로는 불가)
  const files = fs.readdirSync(dirPath);

  files.forEach(function(file) {
    const dPath = dirPath + "\\" + file; 

    // 폴더(디렉토리)라면 해당 폴더에 있는 모든 파일목록들을 체크한다
    if (fs.statSync(dPath).isDirectory()) {
      getAllFiles(dPath, arrOfFiles);
    } else {
      // 파일이라면 파일목록에 추가
      arrOfFiles.push(dPath);
    }
  });

  return arrOfFiles;
}

const files = getAllFiles(__dirname + "\\base", []);
console.log(files.join('\n'));