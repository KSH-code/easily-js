const fs = require('fs')
const fileArr = fs.readdirSync(__dirname)

const exportsObject = {}
for (let i = 0; i < fileArr.length; i++) {
  let fileName = fileArr[i]
  if (fileName.length > 3 && fileName.substr(fileName.length - 3, fileName.length) === '.js') {
    fileName = fileName.substr(0, fileName.length - 3)
    if (fileName === 'index') continue
    exportsObject[fileName] = require(`./${fileName}`)
  }
}

module.exports = exportsObject
