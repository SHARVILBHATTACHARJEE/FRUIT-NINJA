var PLAY=1
var END=0
var score=0
var gameState=1

function preload(){
  s=loadImage("sword.png")
  f1=loadImage("fruit1.png")
  f2=loadImage("fruit2.png")
  f3=loadImage("fruit3.png")
  f4=loadImage("fruit4.png") 
  go=loadImage("gameover.png")
  aa=loadAnimation("alien1.png","alien2.png")
  gs=loadSound("gameover.mp3")
  ks=loadSound("knifeSwooshSound.mp3")
}  
function setup(){
  createCanvas(400,400)
  sd=createSprite(150,150,1,1)
  sd.addImage(s)
  sd.scale=0.6
  fg=createGroup()
  ag=createGroup()
  g=createSprite(200,200,1,1)
  g.addImage(go)
}
function draw(){
  background("lightblue")
  
  if (gameState===1){
  ft()
  an()
    
    if(sd.isTouching(fg)){
    fg.destroyEach()
    score=score+2
    ks.play()
  }
    g.visible=false
    
  if(sd.isTouching(ag)){
    ag.destroyEach()
    gs.play()
    gameState=0
}
 sd.y=mouseY
 sd.x=mouseX
  }else if(gameState==0){
    fg.destroyEach()
    ag.destroyEach()
    g.visible=true
    if(keyDown("space")){
      gameState=1
      score=0
      
 }
  }
  
  fill("red")
  text("SCORE: "+score,170,40)
  

  drawSprites()
}
function ft(){
  if(frameCount%40==0){
    f=createSprite(0,random(100,300),1,1)
    f.scale=0.2
    f.velocityY=random(-3,3)
    f.lifetime=50
    fg.add(f)
     p=Math.round(random(1,2))
    
    if(p==1){
      f.x=400
      f.velocityX=-8
      
    }else if(p==2){
      f.x=0
      f.velocityX=8
    }
    
    i=Math.round(random(1,4))
  if(i==1){
  f.addImage(f1)  
 }else if(i==2){
   f.addImage(f2)
 }else if(i==3){
   f.addImage(f3)
 }else{
   f.addImage(f4)
 }
    }
}
function an(){
  if(frameCount%140==0){
  a=createSprite(0,random(100,300),1,1)
  a.addAnimation("alien",aa)
  a.velocityY=random(-3,3)
  a.lifetime=50
  ag.add(a)
    
    if(p==1){
      a.x=400
      a.velocityX=-8
    }else if(p==2){
      a.x=0
      a.velocityX=8
    }
  }
}