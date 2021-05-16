canvas=document.getElementById('myCanvas');
ctx= canvas.getContext("2d");
background_image="mars.jpg";
rover_image="rover.png";
rover_X=10;
rover_y=10;
rover_width=100;
rover_height=90;

function add(){
    background_image_tag=new Image();
    background_image_tag.onload=upload_background;
    background_image_tag.src=background_image;

   rover_image_tag=new Image();
    rover_image_tag.onload=upload_rover;
    rover_image_tag.src=rover_image;
}
function upload_background(){
    ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);

}
function upload_rover(){
    ctx.drawImage(rover_image_tag, rover_X,rover_y , rover_width, rover_height);
    
}

