const fs = require('fs')

const a= fs.readFileSync('1.初入React世界.md', 'utf8')


const b= a.replace(/pre\>[\s\S]*(\n)[\s\S]*\<\/pre/, function(word){
  return word.replace(/\n{2, }/g, '\n')
})
console.log(b)