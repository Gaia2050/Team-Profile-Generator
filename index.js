const fs = require('fs');
const generatePage = require('./src/generatePage');
fs.writeFile('index.html', generatePage(), (err)=>{
    if (err) throw err;
    console.log('file create');
});
