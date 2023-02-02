const {writeFile,unlink} = require('node:fs')

writeFile('third-text.text','this is my third text file.', function(err){
    if(err) throw err
    console.log('File is created successfully.');
})

unlink('third-text.text', (err) => {
    if (err) throw err;
    console.log('successfully deleted ./third-text.text');
  });
