const fat = require('./fatorial');

console.log('n-fatorial');

/* console.log(`Executando o script a partir do diretorio ${process.cwd()}`);

process.on('exit', () =>{
    console.log('script está prestes a terminar');
}); */

const num = parseInt(process.argv[2]);

console.log(`O Fatorial de ${num} é igual a ${fat.fatorial(num)}`);
