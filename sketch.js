/*
 *
 * Cinema Expandido Web
 * Pixel Array (13/feb/18)
 * Kaori Hayama
 * 
 *
 * URL
 */


/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */

var video;

/*
 *****************************************
 *****************************************
 * LIFE CYCLE METHODS
 *****************************************
 *****************************************
 */
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


function setup() {
  createCanvas(displayWidth, displayHeight);
  initializeVideo();
}


function draw() {
  background(0);
  drawVideo4();
  toggleVideo();
}

/*
 *****************************************
 *****************************************
 * VIDEO METHODS
 *****************************************
 *****************************************
 */
 
 function initializeVideo(){
   video= createVideo("assets/videos/fingers.mov");
   video.loop();
   video.hide();
 }
 
 function drawVideo(){ 
   var correctionX = (windowWidth/2 - video.width/2);
   var correctionY = (windowHeight/2 - video.height/2);
   
   video.loadPixels();
   
   for(var y=0; y<video.height; y++){
    for(var x=0; x<video.width;x++){
      var index = (x+(y*video.width))*4;
      
      video.pixels[index] = 111; //aqui tengo los rojos
      video.pixels[index + 1] = video.pixels[index + 2]; //aqui tengo los verdes
      video.pixels[index + 2] = video.pixels[index]; //aqui tengo los azules
      video.pixels[index + 3] = video.pixels[index + 3]; //aqui tengo el alpha
    }
   }
   
   
   video.updatePixels();
   
   image(video,correctionX,correctionY);
   
   
 }
 
 function drawVideoLuz(){ 
   var correctionX = (windowWidth/2 - video.width/2);
   var correctionY = (windowHeight/2 - video.height/2);
   
   video.loadPixels();
   
   for(var y=0; y<video.height; y++){
    for(var x=0; x<video.width;x++){
      var index = (x+(y*video.width))*4;
      if(index%130==0)
      {
      video.pixels[index] = 111; //aqui tengo los rojos
      video.pixels[index + 1] = video.pixels[index + 2]; //aqui tengo los verdes
      video.pixels[index + 2] = video.pixels[index]; //aqui tengo los azules
      video.pixels[index + 3] = video.pixels[index + 3]; //aqui tengo el alpha
      }
    }
   }
   
   
   video.updatePixels();
   
   image(video,correctionX,correctionY);
 }
 
  function drawVideo3(){ 
   var correctionX = (windowWidth/2 - video.width/2);
   var correctionY = (windowHeight/2 - video.height/2);
   
   video.loadPixels();
   
   var stepSize= 10;
   
   for(var y=0; y<video.height; y+=stepSize){
    for(var x=0; x<video.width;x+= stepSize){
      
      var index = (x+(y*video.width))*4;
      
      var darkness= (255-video.pixels[index])/255;
      
      var radio = stepSize * darkness;
      
      fill(video.pixels[index],video.pixels[index+1],video.pixels[index+2]);
      
      ellipse(x+correctionX,y+correctionY,radio,radio);
      
    }
   }
   
   
   //video.updatePixels();
   
   //image(video,correctionX,correctionY);
 }
 
 function drawVideo4(){ 
   var correctionX = (windowWidth/2 - video.width/2);
   var correctionY = (windowHeight/2 - video.height/2);
   
   video.loadPixels();
   
   var stepSize= round(map(mouseX, 0, windowWidth, 8,60));
   
   for(var y=0; y<video.height; y+=stepSize){
    for(var x=0; x<video.width;x+= stepSize){
      
      var index = (x+(y*video.width))*4;
      
      var darkness= (255-video.pixels[index])/255;
      
      var radio = stepSize * darkness;
      
      fill(video.pixels[index],video.pixels[index+1],video.pixels[index+2]);
      
      ellipse(x+correctionX,y+correctionY,radio,radio);
      
    }
   }
   
   
   //video.updatePixels();
   
   //image(video,correctionX,correctionY);
 }
 
 function toggleVideo(){
    if(mouseY <= windowHeight/2){
      video.play();
    }
    else{
      video.pause();
    }
}
    

 
 