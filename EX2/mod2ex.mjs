//
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
//

//m1




//e3
/*
let maand = await userInput.question('Geef mij een maand: ');
let dagen = '';

switch(maand){
    case 'januari':
        dagen = 31;
        break;
    case 'februari':
        dagen = 28;
        break;
    case 'maart':
        dagen = 31;
        break;
    case 'april':
        dagen = 30;
        break;
    case 'mei':
        dagen = 31;
        break;
    case 'juni':
        dagen = 30;
        break;
    case 'juli':
        dagen = 31;
        break;
    case 'augustus':
        dagen = 31;
        break;
    case 'september':
        dagen = 30;
        break;
    case 'oktober':
        dagen = 31;
        break;
    case 'november':
        dagen = 30;
        break;
    case 'december':
        dagen = 31;
        break;
}

console.log('In de maand '+maand+ ' zijn er '+dagen+' dagen.');
*/

//e2
/*
let min = 2.378273;
let max = 9.893;
let num1 = parseFloat(await userInput.question('Geef een getal: '));

if(num1 > min && num1 < max){
    console.log('Je getal '+num1+' ligt tussen '+min+ ' en '+max);
}else{
    console.log('Je getal ligt buiten de variabelen');
}
*/

//e1
/*
let num = parseFloat(await userInput.question('Geef mij een getal: '));

if(num % 2 == 0){
    console.log('even');
}else{
    console.log('oneven');
}
*/


process.exit();
