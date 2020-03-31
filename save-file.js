const fs = require('fs')
const yargs = require('yargs');


const argv = yargs
.demandOption('filename')
.demandOption('content')
.alias('f', 'filename')
.argv;

fs.writeFile(argv.filename, argv.content, (err) => {
    if(err) throw err;

    console.log(`Arquivo ${argv.filename} foi salvo com sucesso.`);
});

