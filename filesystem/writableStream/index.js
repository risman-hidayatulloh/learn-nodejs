const fs = require('fs')
const {resolve} = require('path')

const writableStream = fs.createWriteStream(resolve(__dirname, 'output.txt'))

writableStream.write('Hello txt one \n')
writableStream.write('Hello txt two \n')
writableStream.write('Hello txt three \n')
writableStream.end('Txt end \n')

//compile : node ./filesystem/writableStream/index.js
