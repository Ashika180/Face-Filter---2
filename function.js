function preload(){}

function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPose);
}

function modelLoaded(){
    console.log('Model Loaded!');
}

function getPose(results){
    if(results.length > 0){
    console.log(results);
    console.log("X coordinates of nose are - " + results[0].pose.nose.x);
    console.log("Y coordinates of nose are - " + results[0].pose.nose.y);
    }
}

function draw(){
    image(video, 0, 0, 500, 400);
}

function take_snap(){
    save('potter.jpg');
}