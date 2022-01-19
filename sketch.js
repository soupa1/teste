var personagem;





function setup() {
  createCanvas(400,400);
  personagem = createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
  drawSprites();

  if(keyDown("w")){
    personagem.position.y -= 5;

  }
  if(keyDown("a")){
    personagem.position.x -= 5;

  }
  if(keyDown("s")){
    personagem.position.y += 5;

  }
  if(keyDown("d")){
    personagem.position.x += 5;

  }
}




