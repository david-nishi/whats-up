const fs = require('fs')
const path = require('path')

const fileContent = fs.readFileSync(path.resolve(__dirname, '../assets/mock_data.txt'), 'utf-8')
const data = JSON.parse(fileContent)

data.forEach(thing =>
  console.log(thing * 2)
)
