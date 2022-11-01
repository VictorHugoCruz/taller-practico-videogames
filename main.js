const canvas = document.querySelector('#game__layout');
const game = canvas.getContext('2d');
const up = document.querySelector('#up');
const left = document.querySelector('#left');
const right = document.querySelector('#right');
const down = document.querySelector('#down');

//variables globales
let canvasSize;
let elemtSize;
const playerPos = {
  x: undefined,
  y: undefined,
};

//addEventListener
window.addEventListener('load', setCanvaSize);
window.addEventListener('resize', setCanvaSize);
window.addEventListener('keydown', pressArrow);

up.addEventListener('click', moveUp);
left.addEventListener('click', moveLeft);
right.addEventListener('click', moveRight);
down.addEventListener('click', moveDown);


//funcion que establece la dimension del canvas
function setCanvaSize(){
  if(window.innerWidth>window.innerHeight){
    canvasSize = Math.round(window.innerHeight * 0.8);
  }else{
    canvasSize=Math.round(window.innerWidth * 0.8);
  }

  canvas.setAttribute('width',canvasSize);
  canvas.setAttribute('height', canvasSize);

  elemtSize = canvasSize /10;
  startGame();
}

function startGame(){
  game.font = elemtSize + 'px Verdana';
  game.textAlign = 'end';

  const map = maps[0];
  const mapRow = map.trim().split('\n');
  const mapRowCol = mapRow.map(row => row.trim().split(''));

  game.clearRect(0,0,canvasSize, canvasSize);
  mapRowCol.forEach((row, x)=>{
    row.forEach((column, y)=>{
      const emoji=emojis[column]
      const posX = elemtSize*(y+1)+10;
      const posY = elemtSize*(x+1)-10;
      game.fillText(emoji,posX ,posY);
      if(column=='O'){
        if(!playerPos.x && !playerPos.y){
          playerPos.x = posX;
          playerPos.y = posY;
        }
      }
    })
  });

  movePlayer();
}

function movePlayer(){
  game.fillText(emojis['PLAYER'], playerPos.x, playerPos.y)
  console.log({playerPos})
}

//funciones para el movimiento
function moveUp(){
  console.log('arriba')
  if(elemtSize<playerPos.y){
    playerPos.y -= elemtSize;
    startGame();
  }
}

function moveLeft(){
  console.log('izquierda')
  if(elemtSize<playerPos.x-elemtSize){
    playerPos.x -= elemtSize;
    startGame();
  }
}

function moveRight(){
  console.log('derecha')
  if(canvasSize>playerPos.x){
    playerPos.x += elemtSize;
    startGame();
  }
}

function moveDown(){
  console.log('abajo')
  if(canvasSize>playerPos.y+elemtSize){
    playerPos.y += elemtSize;
    startGame();
  }
}

// funcion para el movimiento con las flechas

function pressArrow(event){
  switch (event.key){
    case 'ArrowUp':
      moveUp();
      break;
    case 'ArrowLeft':
      moveLeft();
      break;
    case 'ArrowRight':
      moveRight();
      break;
    case 'ArrowDown':
      moveDown();
      break;    
  }
}