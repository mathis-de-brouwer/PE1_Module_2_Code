import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Geef hierin je eerste getal: '));
let getal2 = parseFloat(await userInput.question('Geef hierin je tweede getal: '));

if(getal1 > getal2){
    console.log('Het grootste getal is ' + getal1);
}else{
    console.log('Het grootste getal is ' + getal2);
}

process.exit();
