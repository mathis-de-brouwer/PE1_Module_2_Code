import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let num1 = parseFloat(await userInput.question('Voer een getal in: '));
let num2 = parseFloat(await userInput.question('Voer een getal in: '));

if(num1 > 0 && num2 > 0){
    console.log('Beide getallen zijn positief.');
    if(num1 > 0 && num2 < 0){
        console.log('Het eerste getal is positief en het tweede getal is negatief.');
    }
}
if(num1 < 0 && num2 > 0){
    console.log('Het eerste getal is negatief en het tweede getal is positief.');
    if(num1 < 0 && num2 < 0){
        console.log('Beide getallen zijn negatief.');
    }
}
if(num1 == 0 || num2 == 0){
    console.log('Eén van de getallen is nul.');
}


/*
ex10 oef 2

let dag = await userInput.question('Welke dag is het vandaag?: ');
let dag2 ='';

    switch(dag){
        case 'maandag':
            dag2 = 'weekdag';
            break;
        case 'dinsdag':
            dag2 = 'weekdag';
            break;
        case 'woensdag':
            dag2 = 'weekdag';
            break;
        case 'donderdag':
            dag2 = 'weekdag';
            break;
        case 'vrijdag':
            dag2 = 'weekdag';
            break;
        case 'zaterdag':
            dag2 = 'weekenddag';
            break;
        case 'zondag':
            dag2 = 'weekenddag';
            break;

    }

    console.log('Vandaag is het '+dag+' het is dus een '+dag2+' vandaag.');
*/

process.exit();
