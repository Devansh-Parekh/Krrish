var noseX=0;
var noseY=0;

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}
function take_snapshot(){
    save("clown.png");

}
function modelLoaded(){
    console.log("posenet model loaded");

}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x -105;
        noseY=results[0].pose.nose.y -148;
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}
function draw(){
    image(video,0,0,300,300);
  //  fill(255,0,0);
 //   stroke(255,0,0);
//  circle(noseX,noseY,20);
image(clownnose,noseX,noseY,215,225);

}
function preload(){
    clownnose=loadImage("https://i.postimg.cc/VNZVWgh8/product-500x500-removebg-preview.png");
}