cocossd="";
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    document.getElementById("ai").addEventListener("change", toggleAi)
document.getElementById("fps").addEventListener("input", changeFps)

const video = document.getElementById("video");
const c1 = document.getElementById('c1');
const ctx1 = c1.getContext('2d');
var cameraAvailable = false;
var aiEnabled = false;
var fps = 16;
}
var facingMode = "environment"; // Can be 'user' or 'environment' to access back or front camera (NEAT!)
var constraints = {
audio: false,
video: {
facingMode: facingMode
}
    }
    function start(){
        objectDetector=ml5.objectDetector('cocossd',modelloaded);
        document.getElementById("status").innerHTML="status:Detecting Objects";
        
    }
    
    function preload(){
    img=loadImage('dog_cat.jpg');
    }
    function draw(){
    image(video,0,0,380,380);
    if(status_1!="")
    {
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(video,gotResult);
        for(i=0;i<objects.length;i++)
        {
            function draw(){
image(video,0,0,480,380);
if(status_1!="")
{
objectDetector.detect(video,gotResult);
for(i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="Status:Objects Detected";
document.getElementById("number_of_objects").innerHTML="Number of objects detected are:"+objects.length;
fill("#FF0000");
percent=floor(objects[i].confidence*100);
text(objects[i].label +" "+percent+"%",objects[i].x+15,objects[i].y+15);
noFill();
stroke("#FF0000");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

}
            document.getElementById("status").innerHTML="Status:Object Dectected";
            document.getElementById("number_of_objects").innerHTML="Number of Objects detected are:"+objects.length;
            fill(r,g,b);
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
            noFill();
            stroke(r,g,b);
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].hieght);
        if(objects[i].label=="person")
        {
        document.getElementById("number_of_objects").innerHTML="Baby Found";
        console.log("stop");
        song.stop();
        
        }
        else{
            document.getElementById("number_of_objects").innerHTML="Baby Not Found";
            console.log("play")
            song.play();
        }
        }
        if(objects.length==0)
        {
        document.getElementById("number_of_objects").innerHTML="Baby Not Found";
        console.log("play");
        song.play();
        }
    }
    }
    function modelloaded(){
    console.log("ModelLoaded!");
    }
    function gotResult(error,results){
    if(error){
    console.log(error);
    }
        console.log(results);
        objects=results;
    }