
const {writeFile} = require('node:fs')

writeFile('second-text.text','this is my second text file.', function(err){
    if(err) throw err
    console.log('File is created successfully.');
})