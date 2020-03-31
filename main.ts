import {fatorial} from './fatorial'
import * as yargs from 'yargs';

console.log('n-fatorial');

const argv = yargs.demandOption('num').argv;

const num = parseInt(String(argv.num));

console.log(`O Fatorial de ${num} é igual a ${fatorial(num)}`);
