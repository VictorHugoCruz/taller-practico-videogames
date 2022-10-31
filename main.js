const canvas = document.querySelector('#game__layout');
const game = canvas.getContext('2d');

let canvasSize;
let elemtSize;
window.addEventListener('load', setCanvaSize);
window.addEventListener('resize',setCanvaSize);


//funcion que establece la dimension del canvas
function setCanvaSize(){
  if(window.innerWidth>window.innerHeight){
    canvasSize = window.innerHeight * 0.8;
  }else{
    canvasSize=window.innerWidth * 0.8;
  }

  canvas.setAttribute('width',canvasSize);
  canvas.setAttribute('height', canvasSize);

  elemtSize = canvasSize /10;
  startGame();
}

function startGame(){
  game.font = elemtSize + 'px Verdana';
  game.textAlign = 'end';
  // for (let i = 1; i <= 10; i++) {
  //   game.fillText(emojis['X'], elemtSize*i+4, elemtSize-10);
  // }

  const map = maps[0];
  const mapRow = map.trim().split('\n');
  const mapRowCol = mapRow.map(row => row.trim().split(''));
  // console.log({mapRowCol})
  
  // for (let x = 1; x <= 10; x++) {
  //   for (let y = 1; y <= 10; y++) {
  //     game.fillText(emojis[mapRowCol[y-1][x-1]],elemtSize*x,elemtSize*y-10);
  //   }
  // }

  mapRowCol.forEach((row, x)=>{
    row.forEach((column, y)=>{
      const emoji=emojis[column]
      game.fillText(emoji,elemtSize*(y+1),elemtSize*(x+1)-10);
    })
  })

}
