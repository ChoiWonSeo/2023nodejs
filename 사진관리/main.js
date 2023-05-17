const fs = require('fs');
const path = require('path');

// dirPath에 있는 모든 파일목록의 배열(하위경로까지)
function getAllFiles(dirPath, arrOfFiles) {
  // dirPath에 있는 모든 파일목록의 배열(하위경로는 불가)
  const files = fs.readdirSync(dirPath);

  files.forEach(function(file) {
    const dPath = path.join(dirPath, file) 

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

function getDuplicated(baseDir) {
  if(!fs.existsSync('이상한 경로')) {
    console.log('폴더가 존재하지 않습니다');
    return;
  } else {
    console.log('폴더가 존재합니다');
  }

  const duplicateDir = path.join(baseDir, 'duplicated');
  console.log(duplicateDir);
}

// const files = getAllFiles(path.join(__dirname, 'base'), []);
// console.log(files.join('\n'));

getDuplicated(path.join(__dirname, 'base'));