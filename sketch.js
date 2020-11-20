let dog;
let happyDog;
let database;
let foodS;
let foodStock;

function preload()
{
  dogImg = loadImage("dogImg.png");
  dogImg2 = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('food')
    foodStock.on("value", readStock)
  
  dog = createSprite(250, 240, 30, 30);
  dog.addImage(dogImg)
  dog.scale = 0.2
  
}


function draw() { 
  background(46, 139, 87); 

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg2)

    console.log("keyDown is working!")
  }

  drawSprites();
  //add styles here
  stroke("red")
  textSize(20)
  text("Food remaining : "+foodS,170,100);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0)
  {
     x=0;
  }else
  { 
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })

  console.log("Stock is working")
}