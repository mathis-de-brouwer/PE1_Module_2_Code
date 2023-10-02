import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let taal = await userInput.question('Please choose a language out of these 3: \n FR\n NL\n ENG\n: ');
let FR ='FR';
let NL ='NL';
let ENG ='ENG';


if(taal == FR){
    console.log('Bonjour cher visiteur, bienvenu sur notre site.');
}else if(taal == NL){
    console.log('Hallo beste bezoeker, welkom op onze site. ');    
}else if(taal == ENG){
    console.log('Hello dear visitor, welcome to our site. ');
}else{
    console.log('Dear visitor, our site unfortunatlu only supports French, Dutch and English. If you entered another langueage the site will not work. \n Be sure to also write the names of the language with a capital in front. \n ex. Dutch, French... ');
}


process.exit();
