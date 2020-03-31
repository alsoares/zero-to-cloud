const fs = require('fs')

const arg2 = process.argv[2];
fs.writeFile(arg2, process.argv[3], (err) => {
    if(err) throw err;

    console.log(`Arquivo ${arg2} foi salvo com sucesso.`);
});