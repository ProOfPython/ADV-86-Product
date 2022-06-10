var canvas = new fabric.Canvas('myCanvas');
var blockImgWidth = 30
var blockImgHeight = 30
var playerX = 10
var playerY = 10
var playerSpeed = 5
var playerObject = '';
var blockImgObject = '';
function playerUpdate(){
    fabric.Image.fromURL('player.png', function(Img){
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY, 
            left:playerX
        });
        canvas.add(playerObject);
    });
};
function newImage(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        blockImgObject = Img;
        blockImgObject.scaleToWidth(blockImgWidth);
        blockImgObject.scaleToHeight(blockImgHeight);
        blockImgObject.set({
            top:playerY, 
            left:playerX
        });
        canvas.add(blockImgObject) 
    });
};
window.addEventListener('keydown', myKeydown())
function myKeydown(e){
    keyPressed = e.keyCode;
	if (keyPressed >= 37 && keyPressed <= 40){
		if (keyPressed == 37 ){
			playerX -= playerSpeed;
		}else if (keyPressed == 38 ){
			playerY -= playerSpeed;
		}else if (keyPressed == 39 ){
			playerX += playerSpeed;
		}else if (keyPressed == 40 ){ 
			playerY += playerSpeed;
		}
    }
    playerUpdate()
}