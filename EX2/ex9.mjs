import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let serie = await userInput.question('Geef mij een serienaam: ');

let locatie ='';

switch(serie){
    case 'The Simpsons':
        locatie = ' in Springfield';
        break;
    case 'One Piece':
        locatie = ' op de Grand Line';
        break;
    case 'Naruto':
        locatie = ' in Konoha';
        break;
    default:
        console.log('Sorry ik weet niet waar ' + serie + ' zich afspeeld.');

}

console.log('De serie '+serie+' speeld zich af'+locatie);

process.exit();
