jogo()
function jogo() {
var readlineSync = require('readline-sync');

do {
console.log('Escolha pedra, papel ou tesoura')
console.log('1:Pedra');
console.log('2:Papel');
console.log('3:Tesoura');
var user = Number(readlineSync.questionInt('', {hideEchoBack: true}));
} while ( user > 3 );

const palavras = "Pedra... Papel... Tesoura... ".split(" ");
let i = 0;

const intervalo = setInterval(() => {
  console.log(palavras[i]);
  i++;
  if (i === palavras.length) {
    clearInterval(intervalo);
  }
}, 500);

switch (user) {
  case 1:   
  console.log('Você jogou: Pedra');
    break;
    case 2:  
  console.log('Você jogou: Papel'); 
    break;
  default:
    console.log('Você jogou: Tesoura');
    break;
}
//Random
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var maquina = randomIntFromInterval(1, 3);
//print
switch (maquina) {
  case 1:   
  console.log('Maquina jogou: Pedra');
   maquina = 'pedra';
  resultado()
    break;
    case 2:  
  console.log('Maquina jogou: Papel'); 
   maquina = 'papel';
   resultado()
    break;
  default:
    console.log('Maquina jogou: Tesoura');
    maquina = 'tesoura';
    resultado()
    break;
}
//resultado
function resultado() {
if (maquina == 'pedra' && user == 1) {
  console.log('Empate!');
} else {
  if (maquina == 'pedra' && user == 2) {
    console.log('Você perdeu');
  } else {
    if (maquina == 'pedra' && user == 3) {
      console.log('Você ganhou');
    } else {
      if (maquina == 'papel' && user == 2) {
        console.log('Empate!');
      } else {
        if (maquina == 'papel' && user == 1) {
          console.log('Você perdeu');
        } else {
          if (maquina == 'papel' && user == 3) {
            console.log('Você ganhou');
          } else {
            if (maquina == 'tesoura' && user == 3) {
              console.log('Empate!');
            } else {
              if (maquina == 'tesoura' && user == 2) {
                console.log('Você perdeu');
              } else {
                if (maquina == 'tesoura' && user == 1) {
                  console.log('Você ganhou');
                }               
              }
              
            }
          }        
        }
      }
    }   
  }
}
console.log( `-----------------------------------` )
console.log('Gostaria de jogar mais uma vez?')
console.log('S: Sim N: Não')
var newgame =(readlineSync.question(''));
if (newgame == 's') {
  do {
    jogo()
    } while ( user > 3 );
} else {
  console.log('Obrigado por jogar! :)')
}
}
}