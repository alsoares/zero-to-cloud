import * as fs from 'fs';
import * as yargs from 'yargs';


const argv = yargs
    .demandOption('filename')
    .demandOption('content')
    .alias('f', 'filename')
    .argv;

    
fs.writeFile(String(argv.filename), argv.content, (err) => {
    if (err) throw err;

    console.log(`Arquivo ${argv.filename} foi salvo com sucesso.`);
});