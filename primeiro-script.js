console.log('n-fatorial');

/* console.log(`Executando o script a partir do diretorio ${process.cwd()}`);

process.on('exit', () =>{
    console.log('script está prestes a terminar');
}); */

const fatorial = (num) => {
    if(num === 0)
        return 1;

    return num * fatorial(num - 1);
}


const num = parseInt(process.argv[2]);

console.log(`O Fatorial de ${num} é igual a ${fatorial(num)}`);
