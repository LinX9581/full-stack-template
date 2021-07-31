const fs = require('fs')
let data = '# 我是被寫入的檔案\n'
fs.appendFile('./hello.md', data,function (error) {
    console.log(error)
    console.log('文件寫入成功')
  })

