var x = 110;
var y = 130;
var tela=0;
var perguntaAtual = 0;
var opcao=1;
var vida=3;
var nivel =0;
let img;
var perguntas;
var totalPerguntas = 14;

function preload() {
  img = loadImage('atividades-de-matematica-1-5-ano.jpg');
  perguntas = {
    0 : {
      'pergunta':'5 + 5 + 7',
      'respostas': {
        0: {
          'resposta': '10',
          'isCorreta': false
        },
        1: {
          'resposta': '16',
          'isCorreta': false
        },
        2: {
          'resposta': '17',
          'isCorreta': true
        }
      }
    },
    1 : {
      'pergunta':'4 + 3 + 8',
      'respostas': {
        0: {
          'resposta': '15',
          'isCorreta': true
        },
        1: {
          'resposta': '16',
          'isCorreta': false
        },
        2: {
          'resposta': '14',
          'isCorreta': false
        }
      }
    },
    2 : {
      'pergunta':'9 + 9 + 7',
      'respostas': {
        0: {
          'resposta': '15',
          'isCorreta': false
        },
        1: {
          'resposta': '25',
          'isCorreta': true
        },
        2: {
          'resposta': '14',
          'isCorreta': false
        }
      }
    },
    3 : {
      'pergunta':'4 + 3 + 7',
      'respostas': {
        0: {
          'resposta': '16',
          'isCorreta': false
        },
        1: {
          'resposta': '25',
          'isCorreta': false
        },
        2: {
          'resposta': '14',
          'isCorreta': true
        }
      }
    },
    4 : {
      'pergunta':'20 + 3 + 7',
      'respostas': {
        0: {
          'resposta': '30',
          'isCorreta': true
        },
        1: {
          'resposta': '27',
          'isCorreta': false
        },
        2: {
          'resposta': '31',
          'isCorreta': false
        }
      }
    },
    5 : {
      'pergunta':'20 + 3 + 25',
      'respostas': {
        0: {
          'resposta': '47',
          'isCorreta': false
        },
        1: {
          'resposta': '48',
          'isCorreta': true
        },
        2: {
          'resposta': '52',
          'isCorreta': false
        }
      }
    },
    6 : {
      'pergunta':'(20 + 8) - 25',
      'respostas': {
        0: {
          'resposta': '2',
          'isCorreta': false
        },
        1: {
          'resposta': '4',
          'isCorreta': false
        },
        2: {
          'resposta': '3',
          'isCorreta': true
        }
      }
    },
    7 : {
      'pergunta':'(25 + 14) - 19',
      'respostas': {
        0: {
          'resposta': '20',
          'isCorreta': true
        },
        1: {
          'resposta': '19',
          'isCorreta': false
        },
        2: {
          'resposta': '15',
          'isCorreta': false
        }
      }
    },
    8 : {
      'pergunta':'(90 -40) + 10 +5',
      'respostas': {
        0: {
          'resposta': '50',
          'isCorreta': false
        },
        1: {
          'resposta': '65',
          'isCorreta': true
        },
        2: {
          'resposta': '75',
          'isCorreta': false
        }
      }
    },
    9 : {
      'pergunta':'7 + 9 + 62',
      'respostas': {
        0: {
          'resposta': '80',
          'isCorreta': false
        },
        1: {
          'resposta': '79',
          'isCorreta': false
        },
        2: {
          'resposta': '78',
          'isCorreta': true
        }
      }
    },
    10 : {
      'pergunta':'(3 * 5) + 5',
      'respostas': {
        0: {
          'resposta': '25',
          'isCorreta': false
        },
        1: {
          'resposta': '20',
          'isCorreta': true
        },
        2: {
          'resposta': '35',
          'isCorreta': true
        }
      }
    },
    11 : {
      'pergunta':'(4 * 3) + (4/2)',
      'respostas': {
        0: {
          'resposta': '14',
          'isCorreta': true
        },
        1: {
          'resposta': '16',
          'isCorreta': false
        },
        2: {
          'resposta': '12',
          'isCorreta': false
        }
      }
    },
    12 : {
      'pergunta':'(60/3)-5',
      'respostas': {
        0: {
          'resposta': '35',
          'isCorreta': false
        },
        1: {
          'resposta': '20',
          'isCorreta': false
        },
        2: {
          'resposta': '15',
          'isCorreta': true
        }
      }
    },
    13 : {
      'pergunta':'20 + (90*1) - 10',
      'respostas': {
        0: {
          'resposta': '110',
          'isCorreta': false
        },
        1: {
          'resposta': '100',
          'isCorreta': true
        },
        2: {
          'resposta': '90',
          'isCorreta': false
        }
      }
    }

  }
}

function setup() {
  createCanvas(400, 400);
}
function draw() {

  background(0,125,225);
  image(img, 0,0)
   
  
  if(tela==0){
  menu();
  }
  if (tela==1){
  fase1();
  }
  if (tela==2){
  instrucoes();
  }
  if (tela==3){
  creditos();
  }
}
function menu(){
  
  rect(x, y, 180 ,  45);
  
  textSize(40);
  text ('QUIZ\n MATEMÁTICA',70, 50);
  textSize(30);
  text ('Play', 170, 160)
  text ('Instruções', 140, 240);
  text ('Créditos',150, 325);
  
  if(mouseX>111 && mouseX<289 && mouseY>130 && mouseY<174 && mouseIsPressed){  
	//Fase 1    
    tela=1;
  }
  
  if(mouseX>111 && mouseX<289 && mouseY>209 && mouseY<254 && mouseIsPressed){  
    //Instruções
	tela=2;
  }  
  if(mouseX>111 && mouseX<289 && mouseY>292 && mouseY<335 && mouseIsPressed){  
    //Créditos
	tela=3;
  }
  
}

function fase1(){
  
  
  rect(x, y, 190 ,  90);
  
  //diz quantas vidas o jogador tem
  textSize(20);
  text ('Vidas: '+ vida,15, 20);
  text ('Nível: ' + nivel,310, 20);
  
  //vai determinar se venceu ou perdeu
  if(totalPerguntas == 0){
    alert('Voce venceu!\n O jogo se reiniciará, pressione Esc para voltar para o menu.');
    vida=3;
    totalPerguntas = 14;
    perguntaAtual = 0;
    
  }else{
    if(vida <= 0){
      alert('Você perdeu, suas vidas acabaram!\n O jogo se reiniciará, pressione Esc para voltar para o menu.')
      
      tela=0;
      vida=3;
      perguntaAtual = 0;

    }
  }
  //vai determinar o nivel do jogo
  if(perguntaAtual >= 0 && perguntaAtual < 5){
     nivel = 1;
     }
  if(perguntaAtual >= 5 && perguntaAtual < 9){
     nivel = 2;
     }
  if(perguntaAtual >= 9 && perguntaAtual < 14){
     nivel = 3;
     } 
  //texto do jogo
  textSize(32);
  var pergunta = perguntas[perguntaAtual]
  text(pergunta['pergunta'], 150,100)
  text(pergunta['respostas'][0]['resposta'], 190,190)
  text(pergunta['respostas'][1]['resposta'], 190,260)
  text(pergunta['respostas'][2]['resposta'], 190,330)

}

function instrucoes(){
  textSize(32);
  text('Instruções', 130,90)
  textSize(22);
  text('Use seus conhecimentos de soma,\n divisão, multiplicação e subitração\n para resolver os probleminhas de\n matematica.\n Use as setas para cima e para baixo\n para selecionar as questões corretas\n e aperte Enter para selecionar.\n Pressione Esc para voltar.', 30,150)
  
  
}

function creditos(){
  
  textSize(32);
  text('Creditos', 160,90)
  textSize(25);
  text('Programadora:\n Adriane Alisandra rocha da Silva.\n Turma 01A.', 10,150)
  
}

function keyPressed(){
  if(key == "ArrowUp" && y > 160){
    y=y-80
    opcao=opcao-1
  }//Amo você

  if(key == "ArrowDown" && y < 250){
    y=y+80
    opcao=opcao+1
  }
  if(key=='Enter'){
    if(tela == 0){
      tela=opcao
    }else{
      if(tela == 1){
      if(perguntas[perguntaAtual]['respostas'][opcao-1]['isCorreta']){        
        perguntaAtual += 1;        
        totalPerguntas -= 1; 
       
      }else{
        alert('Resposta errada, tente novamente!');
        vida = vida - 1;
      }
      }
    }  
  }
  if(key=="Escape"){
    tela=0
  }
  
}

