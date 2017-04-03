const fs = require('fs')

const file = fs.readFileSync('2.漫谈React.md', 'utf8')

/* eslint-disable */
const reg = /pre[\s\S]*\>[\s\S]*\<\/pre/

const afterTrans = file.replace(reg, (word) => {
  // console.log(word)
  return word.replace(/(\n)+/g, '\n')
})

console.log(afterTrans)
