const fat = require('./fatorial');
const yargs = require('yargs');

console.log('n-fatorial');

/* console.log(`Executando o script a partir do diretorio ${process.cwd()}`);

process.on('exit', () =>{
    console.log('script está prestes a terminar');
}); */
const argv = yargs.demandOption('num').argv;

const num = parseInt(argv.num);

console.log(`O Fatorial de ${num} é igual a ${fat(num)}`);
