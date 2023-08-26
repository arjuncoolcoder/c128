leftWristX = 0;
leftwristY = 0;
rightWristX = 0;
rightWristY = 0;
song1 = "";
song2 = "";





function draw() 
    {
        image(video,0, 0, 600, 500);

        fill("#ff0000");
        stroke("#ff0000");
        if (scoreLeftWrist > 0.2)
        {
            circle(leftWristX, leftWristY, 25);
            x = floor(leftWristY);
            volume = x/500;
            song.setVolume(volume);
            document.getElementById("volume").innerHTML = "VOLUME IS =  "+ volume; 
        }


    }











function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
  canvas = createCanvas(600, 500);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();


  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

 function gotPoses(results)
    {
        if(results.length > 0);
        {
          console.log(results);
          leftWristX = results[0].pose.leftWrist.x;
          leftWristY = results[0].pose.leftWrist.y;
          console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
          
          rightWristX  = results[0].pose.rightWrist.x;
          rightWristY  = results[0].pose.rightWrist.y;
          console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);


        }
    }
