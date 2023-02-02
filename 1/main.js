const {writeFile,appendFile} = require('node:fs')

writeFile('text.txt','hello world', function(err){
    if(err) throw err
    console.log('File is created successfully.');
})


appendFile('./text.text','\n add new text.', function(err){
    if(err) throw err
    console.log('File is changed successfully.');
})
