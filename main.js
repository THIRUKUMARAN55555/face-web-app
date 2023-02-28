nose_x = 0;
nose_y = 0;


function preload(){
    clown_nose = loadImage('https://i.postimg.cc/ZKtV4QjW/mustache-student-math-favorite-for-friday-the-the-1.png');

}

function draw(){
image(video,0,0,300,300);
image(clown_nose,nose_x,nose_y,30,30); 
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function take_snapshot(){
   save('FILTER_BALL_IMAGE.png');
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotposes (results){
    if (results.length>0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x ="+ nose_x);
        console.log("nose y ="+ nose_y);
    }}
 